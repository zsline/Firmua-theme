import { 
  useBlockProps,
  RichText,
  InspectorControls 
} from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button
} from '@wordpress/components';
import {} from '@wordpress/element'
import './editor.scss';
import { useState } from 'react';

const FAQItem = ({index, faq, onTitleChange, onDescriptionChange, onRemove}) => {
  return (
    <>
      <div className="faq__item">
            <TextControl
              label="Question"
              value={faq.title}
              onChange={(title) => onTitleChange(title, index)}
            />
            <TextareaControl
              label="Answer"
              value={faq.description}
              onChange={(description) => onDescriptionChange(description, index)}
            />
      </div>
      <Button
        className="component-button is-secondary faq-button faq-remove-button"
        isDestructive
        onClick={()=> onRemove(index)}
      >Remove</Button>
    </>
  )
};

export default function Edit({attributes, setAttributes }) {
  const {title} = attributes
  const [faqs, setFaqs] = useState(attributes.faqs || []);

  const onFAQChange = (updatedFAQ, index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index] = updatedFAQ;

    setFaqs(updatedFaqs);
    setAttributes({ faqs: updatedFaqs });
  };

  const addFAQ = () => {
    setFaqs([...faqs, {title: '', description: '' }])
  };

  const handleTitleChange = (newTitle, index) => {
    const updatedFAQ = {...faqs[index], title: newTitle};
    onFAQChange(updatedFAQ, index)
  };
  const handleDescriptionChange = (newDescription, index) => {
    const updatedFAQ = {...faqs[index], description: newDescription};
    onFAQChange(updatedFAQ, index)
  };
  const removeFAQ = (index) => {
    const updatedFAQ = faqs.filter((_, i) => i !== index);

    setFaqs(updatedFAQ);
    setAttributes({ faqs: updatedFAQ });
  };

	return (
    <>
    <InspectorControls>
      <PanelBody title="FAQs Settings">
        <TextControl
          label="Title"
          value={title}
          onChange={(title) => setAttributes({title})}
        />
        {
          faqs.map((faq, index) => (
            <FAQItem
             key={index}
             index={index}
             faq={faq}
             onTitleChange={handleTitleChange}
             onDescriptionChange={handleDescriptionChange}
             onRemove={removeFAQ}
            />
          ))}
          <Button
          className="components-button is-primary faq-button"
          onClick={addFAQ}
          >
            Add FAQ
          </Button>
      </PanelBody>
    </InspectorControls>
      <div { ...useBlockProps() }>
          <section className="faq">
            <RichText
              tagName='h3'
              value={title}
              onChange={(title) => setAttributes({title})}
            />
            <div className="faq__container">
              {
                faqs.map((faq, index) => (
                  <div key={index} className="faq__item">
                    <button type="button" className="faq__head">
                      <span className="faq__icon"></span>
                      <RichText
                        tagName='span'
                        value={faq.title}
                        onChange={(newTitle) => handleTitleChange(newTitle, index)}
                      />
                    </button>
                    <div className="faq__body">
                        <RichText
                          className="faq__content"
                          tagName="div"
                          value={faq.description}
                          onChange={(newDescription) => handleDescriptionChange(newDescription, index)}
                        />
                    </div>
                  </div>
                ))}
             </div>
          </section>
      </div>
    </>
	);
}
