
var clickTag = 'www.google.com';

//format 1 = big box; 2 = cte; 3 = Interstitial Responsive;
var format = 2; 

//select themes 1 - 3
var themes = 0;

//image options 
var imageAnswers = false;

//type 0 = select; 1 = multiselect
var multiselect = false;

//true if with submit button; false if auto submit..
var withButton = true; 



//if to add none of the above in multiselect feature only;
var noneoftheaboveoption = true;

//set options style 0 = grid; 1 = vertical aligned;
var optionsStyle = 0;

//set banner text if creative is expandable..
var bannerText = "Which brands are you familiar with?"

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




//
var responseData = [];

//
var currQuestionIndex = 0;

//
var expandedState = false;



// window.onload = initAd;
window.onload = preloadImages;

window.onresize = resize;

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

    if ( format == 1 || ( format == 2 && !expandedState )) return;

    console.log ('this is called wewewe');

    //set max width and height of the creative..
    var maxW = 667, maxH = 1001;

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

    if ( format !== 2 ) {

        if ( format == 3 ) resize();

        document.querySelector('.universal-cont').style.display = 'block';

        initQuestions ( questions[ currQuestionIndex ] );

    }else {

        showInitialCollapsedState ();
    }

}

function showInitialCollapsedState () {
    
    document.querySelector('.col-cont').style.display = 'block';

    document.querySelector('.bg-col').classList.add ('bg-col-1');

    document.querySelector('.txt-col').innerText = bannerText;

    var cte = document.querySelector('.cte');
    
    cte.classList.add ('cte-1');

    cte.addEventListener('click', function () {
        console.log ('expand');
        showExpandState();
    });

}

function showExpandState ( responsive = false ) {

    expandedState = true;

    document.querySelector('.container').style.width = '100%'; //responsive ? '100%' : '320px';
    document.querySelector('.container').style.height = '100%'; //responsive ? '100%' : '480px';

    resize();

    document.querySelector('.universal-cont').style.display = 'block';

    document.querySelector('.bg').classList.add ('bg-1');
    


    addCloseBtn ();

    initQuestions ( questions[ currQuestionIndex ] );


}

function addCloseBtn () {

    var closeBtn = document.querySelector('.close-btn');

    closeBtn.style.display = 'block';

    closeBtn.addEventListener ('click', collapseAd );


}

function collapseAd () {

}

function setContainerSize () {

    var w, h;

    switch ( format ) {
        case 1 : 
            w = '300px'; h = '250px';
            break;
        case 2 : 
            w = '320px'; h = '50px';
            break;

        default : 
            w = '100%'; h = '100%';
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


    var optionsClass = optionsStyle == 0 ? 'w-50' : 'w-100';

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
        btnDiv.classList.add ('btn-submit-1');
        
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


