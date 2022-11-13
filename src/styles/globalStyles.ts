import { css, CSSResult, unsafeCSS } from 'lit'

import indexCss from './index.css'

function getDocumentStyles () {
    const stylesArray: CSSResult[] = []

    for (let i = 0; i < document.styleSheets.length; i++) {
        const { cssRules } = document.styleSheets[i]
        
        stylesArray.push(css([Object.values(cssRules).map(rule => rule.cssText).join('\n')] as unknown as TemplateStringsArray))
    }
    
    return stylesArray
}

export const globalStyles = [getDocumentStyles(), unsafeCSS(indexCss)]