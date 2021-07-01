
var clickTag = 'www.google.com';

//format 1 = big box; 2 = Interstitial Responsive; 3 = click-to-expand; 
var format = 2; 

//select theme 1 - 3
var theme = 2;

//image options 
var imageAnswers = false;

//type 0 = select; 1 = multiselect
var multiselect = false;

//true if with submit button; false if auto submit..
var withButton = true; 

//set true to add none of the above option ( multiselect );
var noneoftheaboveoption = true;

//set options style 0 = grid; 1 = vertical aligned;
var optionsStyle = 1;

//set banner text if creative is expandable..
var bannerText = "Which brands are you familiar with?";

//set questions 
var questions = [

    {
        question : 'How likely are you to get a shot of tequila in the morning?',
        options : [
            'This is option 1 for q1',
            'This is option 2 for q1',
            'This is option 3 for q1',
            'This is option 4 for q1',
        ]
    }
];

// set "current web app" URL after the deploy
var googleAppURL = 'https://script.google.com/macros/s/AKfycbxe5H2V6o6sTOMcFGYIMMNOidMGUcsTDlaloAQrYy6c2yhaJLn247PPpeFekYk-Zm7A/exec';

//set max width when resized..
var maxW = 667;

//set max height when resized..
var maxH = 1001;

//set end image to show : 1-2
var endImage = 1;

//
var responseData = [];

//
var currQuestionIndex = 0;

//
var expandedState = false;



// window.onload = initAd;
window.onload = preloadImages;


function preloadImages (){

    var manifest = [ 'images/bg.png', 'images/submit.png' ];

    var images = [];

    var imageLoaded = 0, perc = 0;

    for (var i in manifest ) {

        images[i] = new Image();
        images[i].src = manifest [i];
        images[i].onload = function () {

            imageLoaded ++;

            perc = imageLoaded/manifest.length * 100;

            document.querySelector('.pbar').style.width = perc +"%";

            if ( perc >= 100 ) initAd();
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

    document.querySelector(".container").style.width = fw +"px";

    document.querySelector(".container").style.height = fh +"px";

    //font adjustments 
    document.querySelector('.questions').style.fontSize = Math.floor(fh * 0.03 ) + 'px'
}

function initAd () {

    //hide progress bar..
    document.querySelector('.pbar-cont').style.display = 'none';
    
    //show container
    document.querySelector('.container').style.display = 'block';
    
    setContainerSize ();

   
    switch ( format ) {

        case 1:

            document.querySelector('.universal-cont').style.display = 'block';

            document.querySelector('.bg').classList.add ('bg-' + theme);

            initQuestions ( questions[ currQuestionIndex ] );

            break;
        case 2:

            resize();

            document.querySelector('.universal-cont').style.display = 'block';

            document.querySelector('.bg').classList.add ('bg-' + theme);
    
            addCloseBtn ();

            enableResponsive ();

            initQuestions ( questions[ currQuestionIndex ] );

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

function expandAd ( responsive = false ) {

    expandedState = true;

    document.querySelector('.container').style.width = '100%'; //responsive ? '100%' : '320px';
    document.querySelector('.container').style.height = '100%'; //responsive ? '100%' : '480px';

    resize();

    enableResponsive ();

    document.querySelector('.universal-cont').style.display = 'block';

    document.querySelector('.bg').classList.add ('bg-' + theme);
    
    addCloseBtn ();

    initQuestions ( questions[ currQuestionIndex ] );

}

function collapseAd () {

    expandedState = false;

    document.querySelector('.container').style.width = '320px'
    document.querySelector('.container').style.height = '50px';

    document.querySelector('.universal-cont').style.display = 'none';

    enableResponsive ( false );
}

function closeInterstitial () {
    console.log ('close');
    document.querySelector('.main').style.display = 'none';
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

function initQuestions ( obj, index = 0 ) 
{
    console.log ('questions inited')

    //create question main container
    var questCont = document.createElement('div');
    questCont.className = 'question-cont';
    //questCont.style.fontSize = format > 2 ? '2.5vh' : '0.8rem';

    //create question div
    var questDiv = document.createElement('div');
    questDiv.className = 'question-div';
    questDiv.innerText = obj.question;

    
    //create options div
    var optionsDiv = document.createElement('div');
    optionsDiv.className = 'options-div';

    var optionsList = document.createElement('ul')
    optionsList.dataset.qindex = index;


    var optionsClass = optionsStyle == 0 ? 'g-align' : 'v-align';

    for ( var i in obj.options ) {

        var options = document.createElement ('li');
        
        options.className = optionsClass;

        options.innerText = obj.options [i];

        options.addEventListener ('click', function () {

            if ( !multiselect ) resetOptions();
            
            resetNoneOption () 

            this.classList.toggle ('active');

            if ( !withButton ) submitAnswer ();

        });

        optionsList.append( options );
    }

    if ( multiselect && noneoftheaboveoption ) {

        var none = document.createElement ('li');
        
        none.className = optionsClass;

        none.innerText = 'None of the above'

        none.addEventListener('click', function () {

            resetOptions ();

            this.classList.toggle ('active')

        });

        optionsList.append( none );

    }

    optionsDiv.append ( optionsList );

    //add divs to main container..
    questCont.appendChild ( questDiv );
    questCont.appendChild ( optionsDiv );


    //create button if required..
    withButton = multiselect ?  true : withButton;

    if ( withButton ) {

        //create btn div
        var btnDiv = document.createElement('div');
        btnDiv.classList.add ('btn-div');
        btnDiv.classList.add ('btn-submit-' + theme);
        
        btnDiv.addEventListener ('click', function () {
            submitAnswer ();
        });

        //create button element
        // var btn = document.createElement('button');
        // btn.innerText = 'Submit';

        // 
        
        // btnDiv.append ( btn );

        questCont.append ( btnDiv );

    }    

    document.querySelector('.questions').appendChild (questCont);

}

function resetNoneOption ()
{
    if ( multiselect && noneoftheaboveoption ) {

        var opts = document.querySelectorAll('ul[data-qindex="'+ currQuestionIndex +'"] li');

        opts [ opts.length - 1 ].classList.toggle ('active', false);

    }

}

function resetOptions () {

    var options = document.querySelectorAll ('.options-div ul li');

    options.forEach ( ( opt, index ) => {
        opt.classList.remove('active');
    })

}

function submitAnswer () {

    console.log ( 'answer submitted');

    var options = document.querySelectorAll ('.options-div ul li.active');

    if ( options.length > 0 ) {

        //gather answer..

        var tempStringArr = [];

        options.forEach ( (option, i) => {
            tempStringArr.push ( option.innerText );
        });

        responseData.push ( tempStringArr.toString() );

        var questNodes = document.querySelectorAll('.question-cont');

        var currQuestion = questNodes [ currQuestionIndex ];

        currQuestion.style.display = 'none';

        currQuestionIndex ++;

        console.log ( currQuestionIndex , questions.length  );

        if ( currQuestionIndex == questions.length ) {

            showEndScreen ();

            //submitToGoogle();

        }else {
            initQuestions ( questions[currQuestionIndex], currQuestionIndex );
        }

    }

}

function showEndScreen () {

    document.querySelector('.end-img').classList.add ('end-img-' + endImage );

    document.getElementById('end').style.display = 'block';
    
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
    formData.append('Response', responseData[0]);
    formData.append('Group', 'undefined');
    formData.append('QuestionID', 1 );
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


