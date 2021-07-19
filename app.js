

//-----------------------------------------//
//------start of configuration-------------//
//-----------------------------------------//

//privacy policy url
window.clickTag = 'https://www.google.com';

//creative configurations
var creativeConfig = {

    //set format 1 = big box; 2 = interstitial; 3 = click-to-expand; 
    format : 1,
    
    //set creative size.. or initial size for cte creative ( not for big box format )
    size : { width : 320, height : 480 },

    //set true or false if ad/expand is responsive ( not for fixed banner format )
    isResponsive : false,
    
    //select theme 1 - 3
    theme : 1,

    //set banner text. 
    // bannerText : "How likely are you to purchase Hennesy Gold?",
    bannerText : "What brands are you familiar with?",
    
    //set expand size for fixed expand only..
    expandSize : { width : 340, height : 480 },

    // set "current web app" URL after the deploy
    googleAppURL : 'https://script.google.com/macros/s/AKfycbxe5H2V6o6sTOMcFGYIMMNOidMGUcsTDlaloAQrYy6c2yhaJLn247PPpeFekYk-Zm7A/exec',

    
    //creative dimensions ratio if responsive
    creativeRatio : { width : 2, height : 3 },

    //set creative max dimensions for devices with xl screens if responsive
    creativeMaxDimensions : { width : 667, height : 1001 },

    //set creative font color.. 0 = black, 1 = white..
    fontColor : 0,

}

//input questions and set configurations
var questionsData = [
    
    {
        config : {
            //set true or false if to add none-of-the-above option
            withNoneOfTheAbove : false, 
            // set true of false if options are images
            imageOptions : false,
            // 0 = vertical aligned.. 1 = grid style..
            optionsAlignment : 1,
            //set true/false if questions are in random order..
            randomOptions : true,
            //set true if with 'submit' button; false if auto submit
            withSubmitBtn : false,
            //set true if multiselct; false if single select
            multiselect : false,
            //set true or false if options bulleted
            bulleted : true

        },
        question : 'This is with auto submit feature and random?', 

        //set options or image urls here..
        options : [
            'This is option 1',
            'This is option 2',
            'This is option 3',
            'This is option 4',
        ]

    },
    {
        config : {
            //set true or false if to add none-of-the-above option
            withNoneOfTheAbove : false, 
            // set true of false if options are images
            imageOptions : false,
            // 1 = grid style; 2 = vertical aligned..
            optionsAlignment : 1,
            //set true/false if questions are in random order..
            randomOptions : false,
            //set true if with 'submit' button; false if auto submit
            withSubmitBtn : true,
            //set true if multiselct; false if single select
            multiselect : false,
            //set true or false if options bulleted
            bulleted : false

        },
        question : 'This is with a submit button?', 

        //set options or image urls here..
        options : [
            'This is option 1',
            'This is option 2',
            'This is option 3',
            'This is option 4'
        ]

    },
    {
        config : {
            //set true or false if to add none-of-the-above option
            withNoneOfTheAbove : false, 
            // set true of false if options are images
            imageOptions : false,
            // 0 = grid style; 1 = vertical aligned..
            optionsAlignment : 1,
            //set true/false if questions are in random order..
            randomOptions : false,
            //set true if with 'submit' button; false if auto submit
            withSubmitBtn : true,
            //set true if multiselct; false if single select
            multiselect : true

        },
        question : 'This is multi-select with no \'none-of-the-above \' option?', 

        //set options or image urls here..
        options : [
            'This is option 1',
            'This is option 2',
            'This is option 3',
            'This is option 4'
        ]

    },
    {
        config : {
            //set true or false if to add none-of-the-above option
            withNoneOfTheAbove : true, 
            // set true of false if options are images
            imageOptions : false,
            // 0 = grid style; 1 = vertical aligned..
            optionsAlignment : 1,
            //set true/false if questions are in random order..
            randomOptions : false,
            //set true if with 'submit' button; false if auto submit
            withSubmitBtn : true,
            //set true if multiselct; false if single select
            multiselect : true

        },
        question : 'This is multi-select with \'none-of-the-above \' option?', 

        //set options or image urls here..
        options : [
            'This is option 1',
            'This is option 2',
            'This is option 3',
            'This is option 4'
        ]

    },
    {
        config : {
            //set true or false if to add none-of-the-above option
            withNoneOfTheAbove : true, 
            // set true of false if options are images
            imageOptions : false,
            // 0 = grid style; 1 = vertical aligned..
            optionsAlignment : 0,
            //set true/false if questions are in random order..
            randomOptions : false,
            //set true if with 'submit' button; false if auto submit
            withSubmitBtn : true,
            //set true if multiselct; false if single select
            multiselect : true

        },
        question : 'This is multi-select with \'none-of-the-above \' option but grid-aligned?', 

        //set options or image urls here..
        options : [
            'This is option 1',
            'This is option 2',
            'This is option 3',
            'This is option 4'
        ]

    },
    {
        config : {
            //set true or false if to add none-of-the-above option
            withNoneOfTheAbove : false, 
            // set true of false if options are images
            imageOptions : true,
            // 0 = grid style; 1 = vertical aligned..
            optionsAlignment : 0,
            //set true/false if questions are in random order..
            randomOptions : false,
            //set true if with 'submit' button; false if auto submit
            withSubmitBtn : false,
            //set true if multiselct; false if single select
            multiselect : false

        },
        question : 'This is single-select with image options and auto-submit?', 

        //set options or image urls here..
        options : [
            'images/imageChoices/opt_img_1.png',
            'images/imageChoices/opt_img_2.png',
            'images/imageChoices/opt_img_3.png',
            'images/imageChoices/opt_img_4.png',
            // 'images/imageChoices/opt_img_5.png'
        ]

    },
    {
        config : {
            //set true or false if to add none-of-the-above option
            withNoneOfTheAbove : true, 
            // set true of false if options are images
            imageOptions : true,
            // 0 = grid style; 1 = vertical aligned..
            optionsAlignment : 1,
            //set true/false if questions are in random order..
            randomOptions : false,
            //set true if with 'submit' button; false if auto submit
            withSubmitBtn : true,
            //set true if multiselct; false if single select
            multiselect : true

        },
        question : 'This is multi-select with image options?', 

        //set options or image urls here..
        options : [
            'images/imageChoices/opt_img_1.png',
            'images/imageChoices/opt_img_2.png',
            'images/imageChoices/opt_img_3.png',
            'images/imageChoices/opt_img_4.png',
            'images/imageChoices/opt_img_5.png'
        ]

    },
    {   
        config : {
            //set true or false if to add none-of-the-above option
            withNoneOfTheAbove : false, 
            // set true of false if options are images
            imageOptions : false,
            // 0 = grid style; 1 = vertical aligned..
            optionsAlignment : 1,
            //set true/false if questions are in random order..
            randomOptions : true,
            //set true if with 'submit' button; false if auto submit
            withSubmitBtn : true,
            //set true if multiselct; false if single select
            multiselect : false

        },
        question : 'How likely are you to purchase Hennesy Gold?',

        //set options or image urls here..
        options : [
            'Definitely will',
            'Probably will',
            'May or may not',
            'Probably will not',
            'Definitely will not'
        ]
        
    }
];

//-----------------------------------------//
//------end of configuration---------------//
//-----------------------------------------//


var currQuestionIndex = 0;

var responseData = [];

function dismissAd () {

    document.querySelector('.container').remove();

}

function enableResizeListener ( enabled = true ) {
    if ( enabled ) {
        window.addEventListener('resize', resize);
    }else {
        window.removeEventListener ('resize', resize );
    }
}

function resize () {

    const maxW = creativeConfig.creativeMaxDimensions.width, 
    
          maxH = creativeConfig.creativeMaxDimensions.height;

          
    const rW = creativeConfig.creativeRatio.width,

          rH = creativeConfig.creativeRatio.height;
    

    const w = document.body.clientWidth,

          h = document.body.clientHeight; //* 0.9;


    var fw = 0, fh = 0;

    if ( w > h ) {

        fh = ( h > maxH ) ? maxH : h;

        fw = rW/rH *fh;

    }else {

        var calcW = w; // * 0.9;

        var calcH = rH/rW * calcW;

        if ( calcH > h ) {
        
            fh = fh = ( h > maxH ) ? maxH : h;
            fw = rW/rH *fh;
        }else {

            fw = ( w > maxW ) ? maxW : w;
            fh = rH/rW  * fw;;

        }

    }

    var flexCont = document.querySelector('flex-elem').shadowRoot.querySelector('.flex-cont');;

    flexCont.style.width = fw +"px";

    flexCont.style.height = fh +"px";

    flexCont.style.fontSize = fh * 0.03 + "px";
    
}

function redirect () {
    //..
    console.log ('redirected')
}

function setMainContainerSize ( isResponsive, size = { width : 0, height : 0 } ) {

    var mainContainer =  document.querySelector('.container');

    mainContainer.style.width = !isResponsive ?  size.width + 'px' : '100%';

    mainContainer.style.height = !isResponsive ? size.height + 'px' : '100%';

}

function showCollapsed () 
{

    var colElem = document.createElement('collapsed-elem');
    colElem.setAttribute ('theme', creativeConfig.theme );
    colElem.setAttribute ('text',  creativeConfig.bannerText );
    colElem.setAttribute ('textcolor',  creativeConfig.fontColor );

    document.querySelector('.container').appendChild(colElem);

    colElem.shadowRoot.querySelector('.collapsed-btn').addEventListener ('click', showExpanded );

}

function showExpanded () {

    setMainContainerSize ( !creativeConfig.isResponsive, creativeConfig.expandSize )

    showFlex ();

    if ( currQuestionIndex != questionsData.length ) {

        setTimeout ( initQuestions, 100 );
    }else {
        showEndScreen ();
    }

}

function showFlex () 
{

    //..
    var flexElem = document.createElement('flex-elem');

    flexElem.setAttribute('format', creativeConfig.format )

    flexElem.setAttribute('theme', creativeConfig.theme );

    flexElem.setAttribute('responsive', creativeConfig.isResponsive ? 1 : 0 );
    
    flexElem.setAttribute ('textcolor',  creativeConfig.fontColor );
    

    document.querySelector('.container').appendChild(flexElem);

    //..
    var flexShadow = flexElem.shadowRoot;

    flexShadow.querySelector('.clickthru').addEventListener ('click', () => {

        redirect ();
    })

    if ( creativeConfig.format != 1 ) {

        flexShadow.querySelector('.close-btn').addEventListener ('click', () => {

            if ( creativeConfig.format == 2 ) {
                
                dismissAd();

            }else {

                var btn = flexElem.querySelector('.btn-div') 
                
                if ( btn ) btn.removeEventListener ('click', submitAnswer );

                flexElem.remove();

            }

            enableResizeListener (false);
        });
    }

    if ( creativeConfig.isResponsive ) {

        resize ();

        enableResizeListener (true);
    }

}

function initAd () {

    switch ( creativeConfig.format ) {

        case 1 :
            
            setMainContainerSize ( false, { width:300, height:250 } );
            
            showFlex ();

            setTimeout ( initQuestions, 100 );

            break;
            
       case 2 :
           
            setMainContainerSize ( creativeConfig.isResponsive, creativeConfig.size );
                
            showFlex ();

            setTimeout ( initQuestions, 100 );
            
            enableResizeListener ( creativeConfig.isResponsive );

            break;

        case 3 :

            showCollapsed ();

            break;
                        
    }

}

function createOption ( config, parent, value, i ) {

    if ( config.bulleted ) {
            
        const bullet = document.createElement('div');
    
        bullet.classList.add ('bullet')

        parent.appendChild(bullet);

    }

    var optVal = document.createElement('div');

    optVal.classList.add ('opt-val');

    if ( !config.imageOptions ) {

        optVal.innerHTML = '<div class="txt-val">'+value +'</div>';
    }else {
        
        optVal.innerHTML = '<img src="' + value + '" alt="imageOption'+ Number(i+1) +'" class="img-val"/>'
    }

    parent.appendChild(optVal);

}

function initQuestions () {

    //..
    const qContainer = document.querySelector ('flex-elem');

    const questionsMain = qContainer.shadowRoot.querySelector('.questions-cont');

    //..
    const questCont = document.createElement ('div');

    questCont.classList.add ('question-cont');

    questCont.dataset.qindex = currQuestionIndex;

    
    //..
    const questDiv = document.createElement('div');

    questDiv.classList.add ('question', creativeConfig.format != 1 ? 'question-gen' : 'question-bb');

    questDiv.innerText = questionsData[ currQuestionIndex ].question;

    questCont.appendChild (questDiv);

    
    //..
    const optionsCont = document.createElement('div');

    optionsCont.classList.add ('options-cont');

    optionsCont.dataset.qindex = currQuestionIndex;

    const options = questionsData[ currQuestionIndex ].options;

    const config = questionsData[currQuestionIndex].config;

    for ( let i in options ) {

        const option = document.createElement ('div');

        option.classList.add ('option', config.optionsAlignment == 1 ? 'w-50' : 'w-100' );

        option.dataset.id = i;

        createOption ( config, option, options[i], i );
        
        option.addEventListener('click', function () {

            if ( !config.multiselect ) resetOptions ( qContainer.shadowRoot );
            
            resetNoneOption ( qContainer.shadowRoot ) 

            this.classList.toggle ('selected');

            if ( !config.withSubmitBtn ) submitAnswer ();

        });

        optionsCont.appendChild (option);

    }

    if ( config.withNoneOfTheAbove ) {

        const notaOption = document.createElement ('div');

        notaOption.classList.add ('option', config.optionsAlignment == 1 ? 'w-50' : 'w-100' );

        notaOption.dataset.id = 'none';

        const val = !config.imageOptions ? 'None of The above' : 'images/imageChoices/noneoftheabove.png';
        
        createOption ( config, notaOption, val, options.length + 1 );

        notaOption.addEventListener('click', function () {

            resetOptions ( qContainer.shadowRoot );

            this.classList.toggle ('selected')

        });

        optionsCont.appendChild (notaOption);
    }

    questCont.appendChild (optionsCont);

    //submit btn

    var withButton = config.multiselect ?  true : config.withSubmitBtn;

    if ( withButton ) {

        //create btn div
        var btnDiv = document.createElement('div');

        btnDiv.classList.add ('btn-div', 'btn-div-' + ( creativeConfig.format == 1 ? 'bb' : 'gen')  , 'btn-submit-' + creativeConfig.theme, );
        
        btnDiv.addEventListener ('click', submitAnswer);

        questCont.append ( btnDiv );

    }    

    
    questionsMain.appendChild (questCont);

}

function resetNoneOption ( flex )
{

    var config = questionsData [currQuestionIndex ].config;

    if ( config.multiselect && config.withNoneOfTheAbove ) {

        var opts = flex.querySelectorAll('.options-cont[data-qindex="'+ currQuestionIndex +'"] .option');

        opts [ opts.length - 1 ].classList.toggle ('selected', false);
    }

}

function resetOptions ( flex ) {

    var options = flex.querySelectorAll ('.options-cont .option');

    options.forEach ( ( opt, index ) => {
        
        opt.classList.remove('selected');
    })

}

function submitAnswer () {

    var flexElem = document.querySelector ('flex-elem').shadowRoot;

    var selected = flexElem.querySelectorAll ('.options-cont[data-qindex="'+ currQuestionIndex +'"] .option.selected');

    console.log ('sel', selected.length );

    if ( selected.length > 0 ) {

        // //gather answer..

        var tempStringArr = [];

        selected.forEach ( ( el, i ) => {

            var elemId = el.getAttribute('data-id');

            if (  elemId != 'none' ) {
                
                tempStringArr.push ( questionsData[ currQuestionIndex ].options[ elemId ] );

            }else {
                
                tempStringArr.push ( 'noneoftheabove' );
            }

        });

        // console.log ( tempStringArr.toString()  );

        responseData.push ( {
            question : questionsData[currQuestionIndex].question,
            response : tempStringArr.toString()
        } );

        //..

        var questElem = flexElem.querySelector('.question-cont[data-qindex="'+ currQuestionIndex +'"]');

        //questElem.style.display = 'none';

        questElem.style.transform = 'perspective(500px) rotateY(-180deg) translateX(-100%)';

        


        currQuestionIndex ++;
        
        setTimeout ( ()=> {

            if ( currQuestionIndex == questionsData.length ) {

                showEndScreen ();
    
                //submitToGoogle();
    
            }else {
    
                initQuestions ( currQuestionIndex );
            }
    
        }, 300)
        
    }

}

function showEndScreen () {

    var flexElem = document.querySelector ('flex-elem').shadowRoot;

    
    var endstr = creativeConfig.format == 1 ? 'end-img-bb-' + creativeConfig.fontColor : 'end-img-' + creativeConfig.fontColor;

    flexElem.querySelector('.end-cont').style.display = 'block';


    
    flexElem.querySelector('.end-img').classList.add ( endstr );

    flexElem.querySelector('.end-img').addEventListener ('click', function () {
        window.open ( window.clickTag )
    });
    console.log (responseData);
    
}

function submitToGoogle () {

    var http = new XMLHttpRequest();
    var formData = new FormData();

    // formData keys need to match column names in the spreadsheet (case sensitive)
    // formData.append('Timestamp', new Date().toLocaleString());
    // formData.append('DeviceID', creative.userParams.deviceId || creative.userParams.deviceID || 'undefined');
    // formData.append('Response', window.response);
    // formData.append('Group', creative.userParams.group || 'undefined');
    // formData.append('Sheetname', "interstitial");

    formData.append('Timestamp', new Date().toLocaleString());
    formData.append('DeviceID', MediaDeviceInfo.deviceId || 'undefined');
    formData.append('Response', responseData[currQuestionIndex].response );
    formData.append('Group', 'undefined');
    formData.append('QuestionID', currQuestionIndex );
    formData.append('Sheetname', 'interstitial');

    // define what happens on successful form data submission
    http.addEventListener('load', function (evt) {
        console.log(evt);
    });
    
    // define what happens in case of an error
    http.addEventListener('error', function (evt) {
        console.log('Error!', evt);
    });

    // set up our request
    http.open('POST', googleAppURL, true);

    // send our data
    http.send(formData);

     
}

initAd ();

    
