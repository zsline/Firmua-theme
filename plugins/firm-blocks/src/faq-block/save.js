import { useBlockProps, RichText } from '@wordpress/block-editor';
export default function save({attributes}) {
	const { title, faqs = [] } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<section className="faq">
            {title && (
				<RichText.Content
					tagName="h3"
					value={title}
				/>
				)}
            <div className="faq__container">
              {
                faqs.map((faq, index) => (
                  <div key={index} className="faq__item">
                    <button type="button" className="faq__head">
                      <span className="faq__icon"></span>
                      <RichText.Content
                        tagName='span'
                        value={faq?.title || ''}
                      />
                    </button>
                    <div className="faq__body">
                        <RichText.Content
                        className="faq__content"
                        tagName="div"
                        value={faq?.description || ''}
                      />
                    </div>
                  </div>
                ))}
             </div>
          </section>
		</div>
	);
}
