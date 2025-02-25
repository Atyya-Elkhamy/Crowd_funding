function checkUserLoggedIn() {
    // Replace this with your actual logic to check if the user is logged in
    return false; // Assuming user is not logged in for demonstration
}

function showLoginModal() {
    // Assuming you are using Bootstrap modal
    $('#loginModal').modal('show');
}

function hideLoginModal() {
    $('#loginModal').modal('hide');
}

function performAction(action) {
    if (!checkUserLoggedIn()) {
        showLoginModal();
    } else {
        // Perform the action (delete, update, list, add project)
        action();
    }
}
  // Example usage
  document.getElementById("deleteProjectButton").addEventListener("click", function() {
    performAction(function() {
        // Code to delete project
        console.log("Project deleted");
    });
});

document.getElementById("updateProjectButton").addEventListener("click", function() {
    performAction(function() {
        // Code to update project
        console.log("Project updated");
    });
});

document.getElementById("listProjectButton").addEventListener("click", function() {
    performAction(function() {
        // Code to list projects
        console.log("Projects listed");
    });
});

document.getElementById("addProjectButton").addEventListener("click", function() {
    performAction(function() {
        // Code to add project
        console.log("Project added");
    });
});
