
	function FabricateurCouleur() {

        // Récupère la valeur de la couleur rouge
        var rouge = document.getElementById('rouge').value;
    
        // Récupère la valeur de la couleur verte
        var vert = document.getElementById('vert').value;
    
        /// Récupère la valeur de la couleur bleue
        var bleue = document.getElementById('bleue').value;
    
        // rgb() fabrique une nouvelle couleur à partir des valeurs rgb du rouge, bleue et vert
        var color = 'rgb(' + rouge + ',' + vert + ',' + bleue + ')';
    
        // Change la couleur du fond avec la couleur fabriquée
        document.body.style.backgroundColor = color;
    
        // Affiche la nouvelle valeur RGB dans l'encadrement
        document.getElementById('encadrement').value=color;
    
    }
    
    // Lorsque le user modifie le curseur, la fonction FabricateurCouleur est appelée
    document.getElementById('rouge')
        .addEventListener('input', FabricateurCouleur);
  
    document.getElementById('vert')
        .addEventListener('input', FabricateurCouleur);
    
    document.getElementById('bleue')
        .addEventListener('input', FabricateurCouleur);
    
    