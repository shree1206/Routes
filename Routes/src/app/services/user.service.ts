export class AuthService {

    isLoggedIn: boolean = false;

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    isAutheticated() {
        //return this.isLoggedIn;
        return new Promise((resole, reject) => {
            setTimeout(() => {
                resole(this.isLoggedIn);
            }, 100);
        });

    }
}