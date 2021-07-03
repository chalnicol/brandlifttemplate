

//-----------------------------------------
//------start of configuration-------------
//-----------------------------------------

//set format 1 = big box; 2 = Interstitial Responsive; 3 = click-to-expand; 
var format = 2; 

//set true or false if ad/expand is responsive ( not for big box ad )
var isResponsive = false;

//select theme 1 - 3
var theme = 3;

//set banner text. for cte format only.. 
var bannerText = "Which brands are you familiar with?";

//set expand banner dimensions, for cte only and not responsive 
var expandDimensions = { width : 340,  height : 480 }; 

//set questions 
var questionsData = [
    
    {
        config : {
            //set true or false if to add none-of-the-above option
            withNoneOfTheAbove : false, 
            // set true of false if options are images
            imageOptions : false,
            // 1 = grid style; 2 = vertical aligned..
            optionsAlignment : 1,
            //set true/false if questions are in random order..
            randomOptions : true,
            //set true if with 'submit' button; false if auto submit
            withSubmitBtn : false,
            //set true if multiselct; false if single select
            multiselect : false

        },
        question : 'This is with auto submit feature and random?', 

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
            // 1 = grid style; 2 = vertical aligned..
            optionsAlignment : 1,
            //set true/false if questions are in random order..
            randomOptions : false,
            //set true if with 'submit' button; false if auto submit
            withSubmitBtn : true,
            //set true if multiselct; false if single select
            multiselect : false

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
            optionsAlignment : 0,
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

// set "current web app" URL after the deploy
var googleAppURL = 'https://script.google.com/macros/s/AKfycbxe5H2V6o6sTOMcFGYIMMNOidMGUcsTDlaloAQrYy6c2yhaJLn247PPpeFekYk-Zm7A/exec';

//privary policy url..
var clickTag = 'www.google.com';

//set max width when resized..
var maxW = 667;

//set max height when resized..
var maxH = 1001;

//set end image to show : 1-2
var endImage = 1;


//-----------------------------------------
//------end of configuration---------------
//-----------------------------------------



var responseData = [];

var expandedState = false;

var currQuestionIndex = 0;

var initialExpand = false;


// window.onload = initAd;
window.onload = preloadImages;


function preloadImages (){

    var toPreload = [ 
        'images/bg.png', 
        'images/bg2.png', 
        'images/bg3.png', 
        'images/bg-bb.png',
        'images/bg-bb2.png',
        'images/bg-bb3.png',
        'images/bg-col.png',
        'images/bg-col2.png',
        'images/bg-col3.png',
        'images/cte.png',
        'images/cte2.png',
        'images/cte3.png',
        'images/endscreen.png',
        'images/endscreen2.png',
        'images/endscreen-bb.png',
        'images/endscreen2-bb.png',
        'images/submit.png',  
        'images/submit2.png', 
        'images/submit3.png', 
        'images/imageChoices/opt_img_1.png',
        'images/imageChoices/opt_img_2.png',
        'images/imageChoices/opt_img_3.png',
        'images/imageChoices/opt_img_4.png',
        'images/imageChoices/opt_img_5.png',
        'images/imageChoices/noneoftheabove.png',
    ];

    var images = [];

    var imageLoaded = 0, perc = 0;

    for (var i in toPreload ) {

        images[i] = new Image();
        images[i].src = toPreload [i];
        images[i].onload = function () {

            imageLoaded ++;

            perc = imageLoaded/toPreload.length * 100;

            document.querySelector('.pbar').style.width = perc +"%";

            if ( perc >= 100 ) {

                document.querySelector('.pbar-cont').style.display = 'none';

                initAd();
            }
        }

    }
    
}

function resize () {

   
    console.log ('resize container..');

    var w = document.body.clientWidth,
    
        h = document.body.clientHeight; //* 0.9;

    var fw = 0, fh = 0;

    if ( w > h ) {

        fh = ( h > maxH ) ? maxH : h;

        fw = 2/3 *fh;

    }else {

        var calcW = w; // * 0.9;

        var calcH = 3/2* calcW;

        if ( calcH > h ) {
        
            fh = fh = ( h > maxH ) ? maxH : h;
            fw = 2/3 *fh;
        }else {

            fw = ( w > maxW ) ? maxW : w;
            fh = 3/2*fw;;
        }
    
    }

    //console.log ( fw, fh );

    document.querySelector(".universal-cont").style.width = fw +"px";

    document.querySelector(".universal-cont").style.height = fh +"px";

    //font adjustments 
    document.querySelector('.questions').style.fontSize = Math.floor(fh * 0.03 ) + 'px'
}

function initAd () {

    //hide progress bar..
    
    
    //show container
    document.querySelector('.container').style.display = 'block';
    
    setContainerSize ();

   
    switch ( format ) {

        case 1:

            document.querySelector('.base').style.display = 'block';

            document.querySelector('.bg').classList.add ('bg-bb-' + theme);

            initQuestions ();

            break;
        case 2:

            resize();

            document.querySelector('.base').style.display = 'block';

            document.querySelector('.bg').classList.add ('bg-' + theme);
    
            addCloseBtn ();

            enableResponsive ();

            initQuestions  ();

            break;
        case 3:

            showCollapse();

            break;
                    
    }

}

function enableResponsive ( enabled = true ) {

    if ( enabled ) {
        window.addEventListener ('resize', resize );
    }else {
        window.removeEventListener ('resize', resize );
    }
}

function showCollapse () {
    
    document.querySelector('.col-cont').style.display = 'block';

    document.querySelector('.bg-col').classList.add ('bg-col-' + theme );

    document.querySelector('.txt-col').innerText = bannerText;

    var cte = document.querySelector('.cte');
    
    cte.classList.add ('cte-' + theme );

    cte.addEventListener('click', function () {
        expandAd();
    });

}

function expandAd () {

    expandedState = true;

    document.querySelector('.container').style.width = isResponsive ? '100%' : '320px';
    document.querySelector('.container').style.height = isResponsive ? '100%' : '480px';

    document.querySelector('.base').style.display = 'block';

    if ( isResponsive ) {

        resize();

        enableResponsive ();

    }

    if ( !initialExpand ) {

        initialExpand = true;

        document.querySelector('.bg').classList.add ('bg-' + theme);
        
        addCloseBtn ();

        initQuestions ();

    }

}

function collapseAd () {

    console.log ('collapse')
    expandedState = false;

    document.querySelector('.container').style.width = '320px'
    document.querySelector('.container').style.height = '50px';

    document.querySelector('.base').style.display = 'none';

    enableResponsive ( false );
}

function closeInterstitial () {
    console.log ('close');
    document.querySelector('.container').style.display = 'none';
}

function addCloseBtn () {

    var closeBtn = document.querySelector('.close-btn');

    closeBtn.style.display = 'block';

    closeBtn.addEventListener ('click', format == 2 ? closeInterstitial : collapseAd );


}

function setContainerSize () {

    var w, h;

    switch ( format ) {
        case 1 : 
            w = '300px'; h = '250px';
            break;
        case 2 : 
            w = '100%'; h = '100%';
            break;
        default : 
            w = '320px'; h = '50px';
    }

    document.querySelector('.container').style.width = w;
    
    document.querySelector('.container').style.height = h;
    
}

function generateRandomOrder ( length ) {

    var arr = [];
    for ( var i = 0; i < length; i++ ) {
        arr.push ( i );
    }
    var tmp = [];
    while ( arr.length > 0 ) {
        
        var randomIndx = Math.floor(Math.random() * arr.length);

        tmp.push ( arr[randomIndx] );

        arr.splice( randomIndx, 1);
    }
    return tmp;

}

function initQuestions ( index = 0 ) 
{
    

    var qData = questionsData[index];

    //create question main container
    var questCont = document.createElement('div');
    questCont.className = 'question-cont';
    
    //create question div
    var questDiv = document.createElement('div');

    questDiv.classList.add ('question-div', format == 1 ? 'question-div-bb' : 'question-div-gen' ) 

    questDiv.innerText = qData.question;

    //create options div
    var optionsDiv = document.createElement('div');

    var addtlClass = 'options-div-' + (format==1 ? 'bb' : 'gen');
    
    addtlClass += ( !qData.config.withSubmitBtn ? '-nsb' : '');

    optionsDiv.classList.add ('options-div', addtlClass ) 

    var optionsList = document.createElement('ul')
    optionsList.dataset.qindex = index;

    var optionsClass = qData.config.optionsAlignment == 0 ? 'g-align' : 'v-align';

    var randomOrder = qData.config.randomOptions ? generateRandomOrder(qData.options.length) : 0;

    for ( var i in qData.options ) {

        //
        var order = qData.config.randomOptions ? randomOrder[i] : i;

        //
        var options = document.createElement ('li');
        
        options.className = optionsClass;

        options.dataset.id = order;

        //
        var optContent = '';

        if ( qData.config.imageOptions ) {
            optContent = '<div class="img-cont"><img src="' + qData.options [order] + '" alt="imageOption'+order+'" class="img"></div>';
        }else {
            optContent = '<div class="opt-cont">'+ qData.options [order] +'</div>'
        }

        options.innerHTML = optContent;
        
        options.addEventListener ('click', function () {

            if ( !qData.config.multiselect ) resetOptions();
            
            resetNoneOption () 

            this.classList.toggle ('selected');

            if ( !qData.config.withSubmitBtn ) submitAnswer ();

        });

        optionsList.append( options );
    }

    if ( qData.config.multiselect && qData.config.withNoneOfTheAbove ) {

        var none = document.createElement ('li');
        
        none.className = optionsClass;
        
        none.dataset.id = 'none';

        var noneCont = "";
        if ( !qData.config.imageOptions ) {
            noneCont = '<div class="opt-cont">None of the above</div>';
        }else {
            noneCont = '<div class="img-cont"><img src="images/imageChoices/noneoftheabove.png" alt="noneoftheabove" class="img"></div>';
        }
        none.innerHTML = noneCont;

        none.addEventListener('click', function () {

            resetOptions ();

            this.classList.toggle ('selected')

        });

        optionsList.append( none );

    }

    optionsDiv.append ( optionsList );

    //add divs to main container..
    questCont.appendChild ( questDiv );
    questCont.appendChild ( optionsDiv );


    //create button if required..
    var withButton = qData.config.multiselect ?  true : qData.config.withSubmitBtn;

    if ( withButton ) {

        //create btn div
        var btnDiv = document.createElement('div');
        btnDiv.classList.add ('btn-div', 'btn-div-' + ( format == 1 ? 'bb' : 'gen')  , 'btn-submit-' + theme, );
        
        btnDiv.addEventListener ('click', function () {
            submitAnswer ();
        });

        questCont.append ( btnDiv );

    }    

    document.querySelector('.questions').appendChild (questCont);

}

function resetNoneOption ()
{
    var qData = questionsData [currQuestionIndex ];

    if ( qData.config.multiselect && qData.config.withNoneOfTheAbove ) {

        var opts = document.querySelectorAll('ul[data-qindex="'+ currQuestionIndex +'"] li');

        opts [ opts.length - 1 ].classList.toggle ('selected', false);

    }

}

function resetOptions () {

    var options = document.querySelectorAll ('.options-div ul li');

    options.forEach ( ( opt, index ) => {
        opt.classList.remove('selected');
    })

}

function submitAnswer () {


    var selected = document.querySelectorAll ('ul[data-qindex="'+ currQuestionIndex +'"] li.selected');

    //console.log ( selected.length );

    if ( selected.length > 0 ) {

        // //gather answer..

        var tempStringArr = [];

        selected.forEach ( ( el, i) => {

            var elementsId = el.getAttribute('data-id');

            if (  elementsId != 'none' ) {
                
                tempStringArr.push ( questionsData[currQuestionIndex].options[ elementsId ] );

            }else {
                
                tempStringArr.push ( 'noneoftheabove' );
            }

        });

        console.log ( tempStringArr.toString()  );

        responseData.push ( {
            question : questionsData[currQuestionIndex].question,
            response : tempStringArr.toString()
        } );

        //..

        var questNodes = document.querySelectorAll('.question-cont');

        var currQuestion = questNodes [ currQuestionIndex ];

        currQuestion.style.transform = 'translateX(-200%)';

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

    var endstr = format == 1 ? 'end-img-bb-' + endImage : 'end-img-' + endImage;

    document.querySelector('.end-img').classList.add ( endstr );

    document.getElementById('end').style.display = 'block';

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


