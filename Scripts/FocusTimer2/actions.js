import state from './state.js'
import * as timer from './timer.js'
import * as elements from './elements.js'
import * as sounds from './sounds.js'

export function startRunning() {
    state.isRunning = true;
    console.log("toggle Running Function");

    timer.countdown();
    sounds.buttonPressAudio.play();
}

export function stopRunning() {
    state.isRunning = false;
    console.log("toggle Running Function");

    timer.countdown();
    sounds.buttonPressAudio.play();
}

export function addTime() {
    if ( (state.minutes + 5) > 60) {
        state.minutes = 60;
        return
    }
    state.minutes = state.minutes + 5;
    timer.updateDisplay();
}

export function removeTime() {
    if ( (state.minutes - 5) < 0) {
        state.minutes = 0;
        return
    }
    state.minutes = state.minutes - 5;
    timer.updateDisplay();
}

export function stopTimer() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    sounds.buttonPressAudio.play();
    console.log("setTimer function");
}

export function toggleTreeMode() {
    state.treeMode = document.documentElement.classList.toggle('treeMode');
    let activeTree = document.getElementById('activeTree');
    let inactiveTree = document.getElementById('inactiveTree');
    if (state.treeMode) {
        activeTree.classList.remove('disabled');
        inactiveTree.classList.add('disabled');
        sounds.treeModeAudio.play();
    } else {
        activeTree.classList.add('disabled');
        inactiveTree.classList.remove('disabled');
        sounds.treeModeAudio.pause();
    }
    console.log("toggleTreeMode function");
}

export function toggleRainMode() {
    state.rainMode = document.documentElement.classList.toggle('rainMode');
    let activeRain = document.getElementById('activeRain');
    let inactiveRain = document.getElementById('inactiveRain');
    if (state.rainMode) {
        activeRain.classList.remove('disabled');
        inactiveRain.classList.add('disabled');
        sounds.rainModeAudio.play();
    } else {
        activeRain.classList.add('disabled');
        inactiveRain.classList.remove('disabled');
        sounds.rainModeAudio.pause();
    }
    console.log("toggleRainMode function");
}

export function toggleStoreMode() {
    state.storeMode = document.documentElement.classList.toggle('storeMode');
    let activeStore = document.getElementById('activeStore');
    let inactiveStore = document.getElementById('inactiveStore');
    if (state.storeMode) {
        activeStore.classList.remove('disabled');
        inactiveStore.classList.add('disabled');
        sounds.storeModeAudio.play();
    } else {
        activeStore.classList.add('disabled');
        inactiveStore.classList.remove('disabled');
        sounds.storeModeAudio.pause();
    }
    console.log("toggleStoreAudio function");
}

export function toggleFireMode() {
    state.fireMode = document.documentElement.classList.toggle('fireMode');
    let activeFire = document.getElementById('activeFire');
    let inactiveFire = document.getElementById('inactiveFire');
    if (state.fireMode) {
        activeFire.classList.remove('disabled');
        inactiveFire.classList.add('disabled');
        sounds.fireModeAudio.play();
    } else {
        activeFire.classList.add('disabled');
        inactiveFire.classList.remove('disabled');
        sounds.fireModeAudio.pause();
    }
    console.log("toggleTree function");
}
