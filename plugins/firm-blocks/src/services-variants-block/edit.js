import { useBlockProps } from '@wordpress/block-editor';
export default function Edit() {
    const blockProps = useBlockProps();
    return (
        <div {...blockProps}>
            <p>Превью блока Services Variants. Данные Вариантов будут выводиться на фронте.</p>
        </div>
    );
}
