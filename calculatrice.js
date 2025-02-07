function calculer() {
    const premierNombre = parseFloat(document.getElementById('premier-nombre').value);
    const deuxiemeNombre = parseFloat(document.getElementById('deuxieme-nombre').value);
    const operation = document.getElementById('operation').value;
    let resultat;
  
    if (isNaN(premierNombre) || isNaN(deuxiemeNombre)) {
      alert("Veuillez entrer des nombres valides.");
      return;
    }
  
    switch (operation) {
      case 'addition':
        resultat = premierNombre + deuxiemeNombre;
        break;
      case 'soustraction':
        resultat = premierNombre - deuxiemeNombre;
        break;
      case 'multiplication':
        resultat = premierNombre * deuxiemeNombre;
        break;
      case 'division':
        if (deuxiemeNombre === 0) {
          alert("Division par zéro non permise.");
          return;
        }
        resultat = premierNombre / deuxiemeNombre;
        break;
      default:
        alert("Opération non reconnue.");
        return;
    }
  
    // Affichage du résultat
    document.getElementById('resultat').textContent = "Résultat : " + resultat;
  }
  