import {
  RichText,
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  ColorPalette,
} from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, IconButton } from '@wordpress/components';
import { chevronUp, chevronDown, trash } from '@wordpress/icons';
import { useEffect, useCallback } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
  const { items = [], title = '' } = attributes;
  const blockProps = useBlockProps();
  const uid = useCallback(() => `id-${Date.now()}-${Math.random().toString(36).slice(2,9)}`, []);
  useEffect(() => {
    if (!Array.isArray(items)) {
      setAttributes({ items: [] });
    }
  }, []);
  const addItem = useCallback(() => {
    const newItem = {
      id: uid(),
      imageId: '',
      imageUrl: '',
      description: '',
      topcolor: '',
      bottomcolor: '',
    };
    setAttributes({ items: [...(items || []), newItem] });
  }, [items, setAttributes, uid]);
  const updateItem = useCallback((index, field, value) => {
    const next = (items || []).map((it, i) => (i === index ? { ...it, [field]: value } : it));
    setAttributes({ items: next });
  }, [items, setAttributes]);
  const removeItem = useCallback((id) => {
    const next = (items || []).filter((it) => it.id !== id);
    setAttributes({ items: next });
  }, [items, setAttributes]);
  const moveItem = useCallback((index, direction) => {
    const next = [...(items || [])];
    const to = direction === 'up' ? index - 1 : index + 1;
    if (to < 0 || to >= next.length) return;
    const tmp = next[to];
    next[to] = next[index];
    next[index] = tmp;
    setAttributes({ items: next });
  }, [items, setAttributes]);
  return (
    <>
      <InspectorControls>
        <PanelBody title="Slider settings" initialOpen={true}>
          <TextControl
            label="Block title"
            value={title}
            onChange={(v) => setAttributes({ title: v })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <RichText
          tagName="h2"
          className="item-content__title"
          value={title}
          placeholder="Block title"
          onChange={(v) => setAttributes({ title: v })}
          allowedFormats={[]}
          style={{ marginBottom: 12 }}
        />
        {(items || []).map((item, index) => (
          <div
            key={item.id || index}
            className='item'
            style={{
              border: '1px solid #e1e1e1',
              padding: 12,
              marginBottom: 12,
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
            }}
          >
            <div className='item-image' style={{ width: 140 }}>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => {
                    updateItem(index, 'imageId', media.id || '');
                    updateItem(index, 'imageUrl', media.url || '');
                  }}
                  allowedTypes={['image']}
                  value={item.imageId}
                  render={({ open }) => (
                    <Button
                      onClick={(e) => { e.stopPropagation(); open(); }}
                      style={{ width: '100%', padding: 0 }}
                    >
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt=""
                          style={{ display: 'block', width: '100%', height: 120, objectFit: 'contain', marginTop: 48 }}
                        />
                      ) : (
                        <div style={{
                          width: '100%',
                          height: 90,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: '#f5f5f5',
                          color: '#777'
                        }}>
                          Select image
                        </div>
                      )}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              <div className='item-controls' style={{display: 'flex', gap: 6 }}>
                <IconButton
                  icon={chevronUp}
                  label="Move up"
                  isSmall
                  onClick={(e) => { e.stopPropagation(); moveItem(index, 'up'); }}
                />
                <IconButton
                  icon={chevronDown}
                  label="Move down"
                  isSmall
                  onClick={(e) => { e.stopPropagation(); moveItem(index, 'down'); }}
                />
                <IconButton
                  icon={trash}
                  label="Remove"
                  isDestructive
                  isSmall
                  onClick={(e) => {
                    e.stopPropagation();
                    if (! window.confirm('Удалить слайд?')) return;
                    removeItem(item.id);
                  }}
                />
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <RichText
                tagName="p"
                value={item.description}
                placeholder="Item description"
                onChange={(v) => updateItem(index, 'description', v)}
                keepPlaceholderOnFocus
              />
              {/* color controls */}
              <div style={{ display: 'flex', gap: 12, marginTop: 12, alignItems: 'center' }}>
                <div style={{ minWidth: 120 }}>
                  <div style={{ fontSize: 12, marginBottom: 6 }}>Top color</div>
                  <ColorPalette
                    value={item.topcolor || ''}
                    onChange={(color) => updateItem(index, 'topcolor', color)}
                  />
                </div>
                <div style={{ minWidth: 120 }}>
                  <div style={{ fontSize: 12, marginBottom: 6 }}>Bottom color</div>
                  <ColorPalette
                    value={item.bottomcolor || ''}
                    onChange={(color) => updateItem(index, 'bottomcolor', color)}
                  />
                </div>
                <div style={{ width: 36, height: 36, borderRadius: 4, background: item.topcolor || 'transparent', border: '1px solid #ddd' }} title="Top color preview" />
                <div style={{ width: 36, height: 36, borderRadius: 4, background: item.bottomcolor || 'transparent', border: '1px solid #ddd' }} title="Bottom color preview" />
              </div>
            </div>
          </div>
        ))}
        <div style={{ marginBottom: 12 }}>
          <Button isPrimary onClick={addItem}>Add item</Button>
        </div>
      </div>
    </>
  );
}
