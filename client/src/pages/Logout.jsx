

export default function Logout({setLoginStatus}) {
    setLoginStatus('');
    sessionStorage.setItem('message', '')
    //window.location.href = '/';
}