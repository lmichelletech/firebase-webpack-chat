import $ from 'jquery';
import createPersistantSession from './../../sessions';

function buildLoadingScreen(){
    $('#root').html(LoadingScreen());
    initializeLoadingScreenEventListeners();

    setTimeout(() => {
        //check for an active session
        createPersistantSession.session();
    }, 4000);
}

{/* <img src="sample.svg" class="ld ld-surprise"/> */}
function LoadingScreen(user){
    const container = document.createElement('div');
    container.id = 'loading-screen';
    container.classList.add('loading-screen');

    container.innerHTML = `
    
    <div id="loader" class="loader">  
    <div id="fountainTextG"><div id="fountainTextG_1" class="fountainTextG">L</div><div id="fountainTextG_2" class="fountainTextG">o</div><div id="fountainTextG_3" class="fountainTextG">a</div><div id="fountainTextG_4" class="fountainTextG">d</div><div id="fountainTextG_5" class="fountainTextG">i</div><div id="fountainTextG_6" class="fountainTextG">n</div><div id="fountainTextG_7" class="fountainTextG">g</div></div>
    <div class="blockcontainer">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        </div>
    </div>
    `;

    return container;
}

function initializeLoadingScreenEventListeners(){

}

export default buildLoadingScreen;