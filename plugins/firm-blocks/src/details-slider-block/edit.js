import {
  RichText,
  useBlockProps,
  InspectorControls,
} from '@wordpress/block-editor';

import {
  PanelBody,
  TextControl,
  Button,
  ToggleControl,
} from '@wordpress/components';

import {
  useEffect,
  useCallback,
} from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {

  const { items = [] } = attributes;
  const blockProps = useBlockProps();
  const uid = useCallback(
    () => `id-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    []
  );
  useEffect(() => {
    if (!Array.isArray(items)) {
      setAttributes({ items: [] });
    }
  }, []);
  const addItem = () => {
    const newItems = [
      ...items,
      {
        id: uid(),
        title: "",
        list: [],
        priceBefore: "",
        price: "",
        extraList: [],
        table: [],
        button: {
          detail: "",
          order: ""
        }
      }
    ];
    setAttributes({ items: newItems });
  };
  const updateItem = useCallback((index, field, value) => {
    const next = [...items];
    next[index] = {
      ...next[index],
      [field]: value
    };
    setAttributes({ items: next });
  }, [items, setAttributes]);
  const removeItem = useCallback((id) => {
    const next = items.filter((it) => it.id !== id);
    setAttributes({ items: next });
  }, [items, setAttributes]);

  /*
  ------------------------
  Основной список
  ------------------------
  */
  const addMainList = (itemIndex) => {
    const next = [...items];
    next[itemIndex].list.push({
      title: '',
      items: []
    });
    setAttributes({ items: next });
  };
  const updateMainListTitle = (
    itemIndex,
    listIndex,
    value
  ) => {
    const next = [...items];
    next[itemIndex].list[listIndex].title = value;
    setAttributes({ items: next });
  };
  const removeMainList = (
    itemIndex,
    listIndex
  ) => {
    const next = [...items];
    next[itemIndex].list.splice(listIndex, 1);
    setAttributes({ items: next });
  };
  const addMainListItem = (
    itemIndex,
    listIndex
  ) => {
    const next = [...items];
    next[itemIndex]
      .list[listIndex]
      .items.push({
        text: '',
        hasTooltip: false,
        tooltip: ''
      });
    setAttributes({ items: next });
  };
  const updateMainListItem = (
  itemIndex,
  listIndex,
  valueIndex,
  field,
  value
) => {

  const next = [...items];

  next[itemIndex] = {
    ...next[itemIndex],
    list: [...next[itemIndex].list]
  };

  next[itemIndex].list[listIndex] = {
    ...next[itemIndex].list[listIndex],
    items: [...next[itemIndex].list[listIndex].items]
  };

  next[itemIndex].list[listIndex].items[valueIndex] = {
    ...next[itemIndex].list[listIndex].items[valueIndex],
    [field]: value
  };

  setAttributes({ items: next });
};
  const removeMainListItem = (
    itemIndex,
    listIndex,
    valueIndex
  ) => {
    const next = [...items];
    next[itemIndex]
      .list[listIndex]
      .items.splice(valueIndex, 1);

    setAttributes({ items: next });
  };
  /*
  ------------------------
  Список в модальном окне
  ------------------------
  */
  const addExtraListItem = (itemIndex) => {
    const next = [...items];
    next[itemIndex].extraList.push("");
    setAttributes({ items: next });
  };
  const updateExtraListItem = (
    itemIndex,
    listIndex,
    value
  ) => {
    const next = [...items];
    next[itemIndex].extraList[listIndex] = value;
    setAttributes({ items: next });
  };
  const removeExtraListItem = (
    itemIndex,
    listIndex
  ) => {
    const next = [...items];
    next[itemIndex].extraList.splice(listIndex, 1);
    setAttributes({ items: next });
  };
  /*
  ------------------------
 Прейскурант
  ------------------------
  */
  const addTableRow = (itemIndex) => {
    const next = [...items];
    next[itemIndex].table.push({
      col1: "",
      col2: ""
    });
    setAttributes({ items: next });
  };
  const updateTableRow = (
    itemIndex,
    rowIndex,
    field,
    value
  ) => {
    const next = [...items];
    next[itemIndex].table[rowIndex][field] = value;
    setAttributes({ items: next });
  };
  const removeTableRow = (
    itemIndex,
    rowIndex
  ) => {
    const next = [...items];
    next[itemIndex].table.splice(rowIndex, 1);
    setAttributes({ items: next });
  };
  const updateButton = (
    itemIndex,
    field,
    value
  ) => {
    const next = [...items];
    next[itemIndex].button[field] = value;
    setAttributes({ items: next });
  };
  return (
    <>
      <InspectorControls>
        <PanelBody
          title="Details settings"
          initialOpen={true}
        >
          <Button
            isPrimary
            onClick={addItem}
          >
            Добавить элемент
          </Button>
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        {(items || []).map((item, index) => (
          <div
            key={item.id || index}
            className='item'
            style={{
              border: '1px solid #e1e1e1',
              padding: '20px',
              marginBottom: '20px',
              background: '#fff',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <Button
                isDestructive
                isSmall
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            </div>
            <RichText
              tagName="h3"
              value={item.title}
              placeholder="Item title"
              onChange={(v) =>
                updateItem(index, 'title', v)
              }
            />
            <div
              className='price'
              style={{
                marginTop: '20px',
              }}
            >
              <RichText
                value={item.priceBefore}
                placeholder="Before price"
                onChange={(v) =>
                  updateItem(index, 'priceBefore', v)
                }
              />
              <RichText
                value={item.price}
                placeholder="Price"
                onChange={(v) =>
                  updateItem(index, 'price', v)
                }
              />
            </div>
            <div style={{ marginTop: '30px' }}>
              <strong>Контент</strong>
              {(item.list || []).map((list, listIndex) => (
                <div
                  key={listIndex}
                  style={{
                    border: '1px solid #ddd',
                    padding: '15px',
                    marginTop: '15px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <TextControl
                        label="Заголовок списка"
                        value={list.title}
                        onChange={(v) =>
                          updateMainListTitle(
                            index,
                            listIndex,
                            v
                          )
                        }
                      />
                    </div>
                    <Button
                      isDestructive
                      onClick={() =>
                        removeMainList(
                          index,
                          listIndex
                        )
                      }
                    >
                      ×
                    </Button>
                  </div>
                  <div style={{ marginTop: '15px' }}>
                    {(list.items || []).map((value, valueIndex) => (
                      <div
                        key={valueIndex}
                        style={{
                          display: 'flex',
                          gap: '10px',
                          marginTop: '10px',
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                          }}
                        >

                          <TextControl
                            label="Text"
                            value={value.text || ''}
                            onChange={(v) =>
                              updateMainListItem(
                                index,
                                listIndex,
                                valueIndex,
                                'text',
                                v
                              )
                            }
                          />

                          <ToggleControl
                          label="Enable tooltip"
                          checked={!!value.hasTooltip}
                          onChange={(checked) =>
                            updateMainListItem(
                              index,
                              listIndex,
                              valueIndex,
                              'hasTooltip',
                              checked
                            )
                          }
                        />

                          {value.hasTooltip && (

                            <TextControl
                              label="Tooltip"
                              value={value.tooltip || ''}
                              onChange={(v) =>
                                updateMainListItem(
                                  index,
                                  listIndex,
                                  valueIndex,
                                  'tooltip',
                                  v
                                )
                              }
                            />

                          )}

                      </div>
                        <Button
                          isDestructive
                          onClick={() =>
                            removeMainListItem(
                              index,
                              listIndex,
                              valueIndex
                            )
                          }
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="secondary"
                      style={{ marginTop: '10px' }}
                      onClick={() =>
                        addMainListItem(
                          index,
                          listIndex
                        )
                      }
                    >
                      Добавить элемент списка
                    </Button>
                  </div>
                </div>
              ))}
              <div>
              <Button
                variant="primary"
                style={{ marginTop: '15px' }}
                onClick={() => addMainList(index)}
              >
                Добавить список
              </Button>
              </div>
            </div>
            <div style={{ marginTop: '30px' }}>
              <strong>
                Модальное окно
              </strong>
              {(item.extraList || []).map((listItem, listIndex) => (
                <div
                  key={listIndex}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    marginTop: '10px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <TextControl
                      value={listItem}
                      onChange={(v) =>
                        updateExtraListItem(
                          index,
                          listIndex,
                          v
                        )
                      }
                    />
                  </div>
                  <Button
                    isDestructive
                    onClick={() =>
                      removeExtraListItem(
                        index,
                        listIndex
                      )
                    }
                  >
                    ×
                  </Button>

                </div>
              ))}
              <div>
              <Button
                variant="secondary"
                style={{ marginTop: '10px' }}
                onClick={() => addExtraListItem(index)}
              >
                Добавить элемент списка 
              </Button>
              </div>
            </div>
            <div style={{ marginTop: '30px' }}>
              <strong>Таблица</strong>
              {(item.table || []).map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    marginTop: '10px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <TextControl
                      label="Column 1"
                      value={row.col1}
                      onChange={(v) =>
                        updateTableRow(
                          index,
                          rowIndex,
                          'col1',
                          v
                        )
                      }
                    />

                  </div>
                  <div style={{ flex: 1 }}>
                    <TextControl
                      label="Column 2"
                      value={row.col2}
                      onChange={(v) =>
                        updateTableRow(
                          index,
                          rowIndex,
                          'col2',
                          v
                        )
                      }
                    />
                  </div>
                  <Button
                    isDestructive
                    onClick={() =>
                      removeTableRow(
                        index,
                        rowIndex
                      )
                    }
                  >
                    ×
                  </Button>
                </div>
              ))}
              <div>
              <Button
                variant="secondary"
                style={{ marginTop: '10px' }}
                onClick={() => addTableRow(index)}
              >
                Добавить строку
              </Button>
              </div>
            </div>
            <div style={{ marginTop: '30px' }}>
              <strong>Button</strong>
              <TextControl
                label="Текст кнопки модального окна"
                value={item.button?.detail || ''}
                onChange={(v) =>
                  updateButton(index, 'detail', v)
                }
              />
              <TextControl
                label="Текст кнопки заказа"
                value={item.button?.order || ''}
                onChange={(v) =>
                  updateButton(index, 'order', v)
                }
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}