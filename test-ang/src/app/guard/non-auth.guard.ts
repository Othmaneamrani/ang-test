import { CanActivateFn } from '@angular/router';

export const nonAuthGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem("log") === null;
  if (isLoggedIn) {
    return true;
  } else {
    alert("Veuillez vous déconnecter.");
    return false;
  }};
