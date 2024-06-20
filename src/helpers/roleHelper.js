export function getUserRole() {
    return localStorage.getItem('userRole');
  }
  
  export function hasRole(...roles) {
    const userRole = getUserRole();
    return roles.includes(userRole);
  }
  