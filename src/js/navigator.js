import $ from 'jquery';

import buildSignInScreen from './components/screens/auth/SignInScreen';
import buildSignUpScreen from './components/screens/auth/SignUpScreen';
import buildChatScreen from './components/screens/ChatScreen';

window.visited = [];

//props is user and anything else you want to pass
export function navigate(screen, props){
    
    if(screen === 'sign-up-screen'){
        window.visited.push(screen);
        // console.log(screen + " -------->>");
        return buildSignUpScreen();
    }

    if(screen === 'chat-screen' && window.user){
        window.visited.push(screen);
        return buildChatScreen(window.user);
    }

    window.visited.push('sign-in-screen');
    return buildSignInScreen();
    
}

export function goBack() {
    let screen = window.visited.pop();
    // console.log(screen + " -------->>>>>");
    navigate(window.visited[window.visited.length - 1]);
    return screen;
}

export default {navigate, goBack};
