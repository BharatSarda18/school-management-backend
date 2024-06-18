export function capitalizeFirstLetter(string) {
    if (!string) return string; // Check for empty or null strings
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  