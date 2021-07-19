
class CollapseElement extends HTMLElement {

    constructor () {

        super();

        this.attachShadow({mode: 'open'});

    }

    get textColor () {
        return this.hasAttribute('textcolor') ? this.getAttribute('textcolor') : 0;
    }
    set textColor (value) {
        return this.setAttribute('textcolor', value);
    }
    get theme () {
        return this.getAttribute('theme');
    }
    set theme (value) {
        return this.setAttribute('theme', value);
    }
    get text () {
        return this.getAttribute('text');
    }
    set text (value) {
        return this.setAttribute('text', value);
    }
    

    static get observedAttributes () {
        return ['theme', 'text'];
    }

    attributeChangedCallback( prop, oldValue, newValue) {
        console.log('Custom square element attributes changed.', prop );
        //this.updateContent();
    }

    connectedCallback () {
        console.log ( 'this is called')
        this.render();
    }

    render () {

        var linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'components.css');
        
        this.shadowRoot.appendChild(linkElem);

        var collapsedDiv = document.createElement ('div');
        collapsedDiv.classList.add  ( 'collapsed-cont', 'collapsed-bg-' + this.theme, this.textColor == 1 ? 'text-light' : 'text-dark' );

        collapsedDiv.innerHTML = `
            <div class="collapsed-txt">${ this.text }</div>
            <div class="collapsed-btn collapsed-btn-${this.theme}"></div>
            <div class="border"></div>
        `;

        this.shadowRoot.appendChild(collapsedDiv);
         
    }


}

class FlexElement extends HTMLElement {

    constructor () {

        super();

        this.attachShadow({mode: 'open'});

    }

    get textColor () {
        return this.hasAttribute('textcolor') ? this.getAttribute('textcolor') : 0;
    }
    set textColor (value) {
        return this.setAttribute('textcolor', value);
    }

    get responsive () {
        return this.hasAttribute('responsive') ? this.getAttribute('responsive') : 0;
    }
    set responsive ( value ) {
        return this.setAttribute ('responsive', value );
    }


    get theme () {
        return this.hasAttribute('theme') ? this.getAttribute('theme') : 1;
    }
    set theme ( value ) {
        return this.setAttribute ('theme', value );
    }

    get format () {
        return this.hasAttribute('format') ? this.getAttribute('format') : 1;
    }
    set format ( value ) {
        return this.setAttribute ('format', value );
    }

    static get observedAttributes () {
        return ['theme', 'width', 'height'];
    }

    connectedCallback () {
        this.render();
    }

    render () {

        const isResponsive = this.responsive == 1;

        console.log ( isResponsive );

        const w = this.format == 1 ? 300 : 320;
        
        const h = this.format == 1 ? 250 : 480;
        
        var linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'components.css');

        this.shadowRoot.appendChild(linkElem);

        var flexBase = document.createElement ('div');
        flexBase.className = 'flex-base';
        flexBase.style.width = isResponsive ? '100%' : w + 'px';
        flexBase.style.height = isResponsive ? '100%' : h + 'px';

        console.log ( this.textColor, 'clr' );
        var flexDiv = document.createElement ('div');
        flexDiv.classList.add ( 'flex-cont',  this.format != 1 ? 'flex-bg-' + this.theme : 'flex-bg-bb-' + this.theme,  this.format != 1 ? 'flex-fs' : 'flex-fs-bb', this.textColor == 1 ? 'text-light' : 'text-dark' )

        let flexContent = `
            <div class="clickthru"></div>
            <div class="border"></div>
            <div class="questions-cont"></div>
            <div class="end-cont">
                <div class="end-img"></div>
            </div>
        `;

        if ( this.format != 1) {
            flexContent += `<div class="close-btn"></div>`;
        }

        flexDiv.innerHTML = flexContent;

        // var clickThru = document.createElement('div');
        // clickThru.className = 'clickthru';
        // flexDiv.appendChild(clickThru);

        // var border = document.createElement('div');
        // border.className = 'border';
        // flexDiv.appendChild(border);

        // var questionsCont = document.createElement('div');
        // questionsCont.className = 'questions-cont';
        // flexDiv.appendChild(questionsCont);

        // if ( this.format != 1 ) {
        //     var closeBtn = document.createElement('div');
        //     closeBtn.className = 'close-btn';
        //     flexDiv.appendChild(closeBtn);
        // }
        
        flexBase.appendChild( flexDiv );

        this.shadowRoot.appendChild( flexBase )

    }

}



window.customElements.define('collapsed-elem', CollapseElement );

window.customElements.define('flex-elem', FlexElement );

