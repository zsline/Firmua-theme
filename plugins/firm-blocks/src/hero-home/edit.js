import { RichText } from '@wordpress/block-editor';
import { SelectControl, Button } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useCallback } from '@wordpress/element';
import {
    DndContext,
    closestCenter,
    useSensors,
    useSensor,
    PointerSensor,
    KeyboardSensor
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
    useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
export default function Edit({ attributes, setAttributes }) {
  const { items = [] } = attributes;
  const postTypes = useSelect((select) =>
    select('core').getPostTypes({ per_page: -1 }) || []
  , []);
  const uid = useCallback(() => `id-${Date.now()}-${Math.random().toString(36).slice(2,9)}`, []);
  useEffect(() => {
    let changed = false;
    const copy = (items || []).map((it) => {
      const newIt = { ...it };
      if (!newIt.id) { newIt.id = uid(); changed = true; }
      if (!Array.isArray(newIt.tabs)) newIt.tabs = [];
      newIt.tabs = newIt.tabs.map((t) => {
        const nt = { ...t };
        if (!nt.id) { nt.id = uid(); changed = true; }
        return nt;
      });
      return newIt;
    });
    if (changed) {
      setAttributes({ items: copy });
    }
  }, []); 
  const duplicateItem = useCallback((index) => {
  const original = items?.[index];
  if (!original) return;

  const copyItem = {
    ...original,
    id: uid(),
    tabs: (original.tabs || []).map((t) => ({
      ...t,
      id: uid()
    }))
  };

  const newItems = [...items];
  newItems.splice(index + 1, 0, copyItem);

  setAttributes({ items: newItems });
}, [items, setAttributes, uid]);
  const addItem = useCallback(() => {
    setAttributes({
      items: [
        ...(items || []),
        {
          id: uid(),
          title: '',
          tabs: []
        }
      ]
    });
  }, [items, setAttributes, uid]);
  const updateItem = useCallback((index, field, value) => {
    const copy = (items || []).map((it, i) =>
      i === index ? { ...it, [field]: value } : it
    );
    setAttributes({ items: copy });
  }, [items, setAttributes]);
  const removeItem = useCallback((index) => {
    setAttributes({
      items: (items || []).filter((_, i) => i !== index)
    });
  }, [items, setAttributes]);
// =======================================================================
const addTab = useCallback((itemIndex) => {
  // Разрешаем только кастомные post type + стандартные post/page
  const allowedPostTypes = (postTypes || []).filter(
    (type) =>
      type.slug === 'post' ||
      type.slug === 'page' ||
      ![
        'attachment',
        'wp_block',
        'wp_template',
        'wp_template_part',
        'wp_navigation',
        'wp_font_family',
        'wp_font_face',
        'wp_global_styles',
        'wp_pattern',
        'wp_navigation'
      ].includes(type.slug)
  );

  const defaultPostType =
    allowedPostTypes.find((t) => t.slug === 'post')?.slug ||
    allowedPostTypes[0]?.slug ||
    'post';

  const copy = (items || []).map((it, i) => {
    if (i !== itemIndex) return it;

    return {
      ...it,
      tabs: [
        ...(it.tabs || []),
        {
          id: uid(),
          postType: defaultPostType,
          taxonomy: '',
          termId: ''
        }
      ]
    };
  });

  setAttributes({ items: copy });
}, [items, setAttributes, uid, postTypes]);
// =======================================================================

  const updateTab = useCallback((itemIndex, tabIndex, field, value) => {
    const copy = (items || []).map((it, i) => {
      if (i !== itemIndex) return it;
      const tabs = (it.tabs || []).map((t, ti) => {
        if (ti !== tabIndex) return t;
        const updated = { ...t, [field]: field === 'termId' && value !== '' ? parseInt(value, 10) : value };
        if (field === 'postType') {
          updated.taxonomy = '';
          updated.termId = '';
        }
        if (field === 'taxonomy') {
          updated.termId = '';
        }
        return updated;
      });
      return { ...it, tabs };
    });
    setAttributes({ items: copy });
  }, [items, setAttributes]);
  const removeTab = useCallback((itemIndex, tabIndex) => {
    const copy = (items || []).map((it, i) => {
      if (i !== itemIndex) return it;
      const tabs = (it.tabs || []).filter((_, ti) => ti !== tabIndex);
      return { ...it, tabs };
    });
    setAttributes({ items: copy });
  }, [items, setAttributes]);
  const onItemsDragEnd = useCallback((event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const ids = (items || []).map((it) => it.id);
    const oldIndex = ids.indexOf(active.id);
    const newIndex = ids.indexOf(over.id);
    if (oldIndex === -1 || newIndex === -1) return;
    const moved = arrayMove(items, oldIndex, newIndex);
    setAttributes({ items: moved });
  }, [items, setAttributes]);
  const onTabsDragEnd = useCallback((event, itemIndex) => {
    const { active, over } = event;
    if (!items[itemIndex]) return; // <-- защита от невалидного индексa
    if (!over || active.id === over.id) return;
    const tabs = items[itemIndex]?.tabs || [];
    const ids = tabs.map((t) => t.id);
    const oldIndex = ids.indexOf(active.id);
    const newIndex = ids.indexOf(over.id);
    if (oldIndex === -1 || newIndex === -1) return;
    const copy = [...items];
    copy[itemIndex] = { ...copy[itemIndex], tabs: arrayMove(tabs, oldIndex, newIndex) };
    setAttributes({ items: copy });
  }, [items, setAttributes]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );
  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onItemsDragEnd}
      >
        <SortableContext
          items={(items || []).map((it) => it.id)}
          strategy={verticalListSortingStrategy}
        >
          {items.map((item, itemIndex) => (
            <SortableItem key={item.id} id={item.id}>
              <div
                style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px' }}
              >
                <RichText
                  tagName="div"
                  value={item.title}
                  onChange={(v) => updateItem(itemIndex, 'title', v)}
                  placeholder="Item title"
                />
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={(e) => onTabsDragEnd(e, itemIndex)}
                >
                  <SortableContext
                    items={(item.tabs || []).map((t) => t.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {(item.tabs || []).map((tab, tabIndex) => (
                      <SortableItem key={tab.id} id={tab.id}>
                        <TabEditor
                          key={tab.id}
                          tab={tab}
                          postTypes={postTypes}
                          onChange={(field, value) => updateTab(itemIndex, tabIndex, field, value)}
                          onRemove={() => removeTab(itemIndex, tabIndex)}
                        />
                      </SortableItem>
                    ))}
                  </SortableContext>
                </DndContext>
                <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                  <Button
                    variant="secondary"
                    onClick={() => addTab(itemIndex)}
                  >
                    Add tab
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => duplicateItem(itemIndex)}
                  >
                    Duplicate item
                  </Button>
                  <Button
                    isDestructive
                    onClick={() => removeItem(itemIndex)}
                  >
                    Remove item
                  </Button>

                </div>
              </div>
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>
      <Button variant="primary" onClick={addItem}>
        Add item
      </Button>
    </>
  );
}
function TabEditor({ tab, postTypes, onChange, onRemove }) {
  const taxonomies = useSelect((select) => {
    const all = select('core').getTaxonomies() || [];
    return all.filter((t) =>
      (t.types || []).includes(tab.postType)
    );
  }, [tab.postType]);
  const terms = useSelect((select) => {
    if (!tab.taxonomy) return [];
    return select('core').getEntityRecords('taxonomy', tab.taxonomy, {
      per_page: -1
    }) || [];
  }, [tab.taxonomy]);
  return (
    <div style={{ padding: '15px', background: '#f5f5f5', marginBottom: '15px' }}>




<SelectControl
  label="Post type"
  value={tab.postType}
  options={(postTypes || [])
    .filter(
      (pt) =>
        pt.slug === 'post' ||
        pt.slug === 'page' ||
        ![
          'attachment',
          'wp_block',
          'wp_template',
          'wp_template_part',
          'wp_navigation',
          'wp_font_family',
          'nav_menu_item',
          'wp_font_face',
          'wp_global_styles',
          'wp_pattern'
        ].includes(pt.slug)
    )
    .map((pt) => ({
      label: pt.name,
      value: pt.slug
    }))}
  onChange={(v) => onChange('postType', v)}
/>




      <SelectControl
        label="Taxonomy"
        value={tab.taxonomy}
        options={[
          { label: '— Select taxonomy —', value: '' },
          ...taxonomies.map((tax) => ({
            label: tax.name,
            value: tax.slug
          }))
        ]}
        onChange={(v) => onChange('taxonomy', v)}
      />
      {!!tab.taxonomy && (
        <SelectControl
          label="Category / Term"
          value={tab.termId !== '' ? String(tab.termId) : ''}
          options={[
            { label: '— Select term —', value: '' },
            ...terms.map((term) => ({
              label: term.name,
              value: String(term.id)
            }))
          ]}
          onChange={(v) => onChange('termId', v === '' ? '' : parseInt(v, 10))}
        />
      )}

      <Button
        isDestructive
        onClick={onRemove}
      >
        Remove tab
      </Button>
    </div>
  );
}
function SortableItem({ id, children }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        position: 'relative' // нужно для позиционирования хэндла
    };
    const handleStyle = {
        position: 'absolute',
        right: 8,
        top: 8,
        cursor: 'grab',
        padding: 6,
        zIndex: 5,
        userSelect: 'none'
    };
    return (
        <div
            ref={setNodeRef}
            style={style}
        >
            <div
                {...attributes}
                {...listeners}
                style={handleStyle}
                aria-label="Drag handle"
                title="Перетащить"
            >
                ⋮
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}