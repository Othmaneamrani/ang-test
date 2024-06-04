import { CanActivateFn } from '@angular/router';

export const guardAuthGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem("log") !== null;
  if (isLoggedIn) {
    return true;
  } else {
      alert("Veuillez vous authentifier.");
      return false;
  }
};
