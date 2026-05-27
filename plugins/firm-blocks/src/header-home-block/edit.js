import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
export default function Edit() {
	return (
		<div { ...useBlockProps() }>
		<header class="header home-header">
        <div class="container-fluid">
          <div class="header__wrapper">
				<InnerBlocks/>
            <div class="header__mobile-btn">
              <svg
                width="36"
                height="24"
                viewBox="0 0 36 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 23H35M1 12H35M1 1H35"
                  stroke="#686868"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
		</div>
	);
}
