document.addEventListener("DOMContentLoaded", () => {
  const detailsElements = document.querySelectorAll("details");
  detailsElements.forEach((details) => {
    details.addEventListener("toggle", (event) => {
      const targetDetails = event.target;
      const summary = targetDetails.querySelector("summary span svg");
      if (targetDetails.open) {
        summary.classList.add("rotate-180");
      } else {
        summary.classList.remove("rotate-180");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const accordion = document.getElementById("accordion");
  const detailsElements = accordion.querySelectorAll("details");

  detailsElements.forEach((details) => {
    const summary = details.querySelector("summary"); // Obtener el summary asociado

    // Set initial background color for submenus
    if (details.closest("#submenu")) {
      summary.style.backgroundColor = "#A9A9A9"; // Lighter gray for submenus
    } else {
      summary.style.backgroundColor = "#404D40"; // Initial color for main menu
    }
    summary.style.color = "white";

    details.addEventListener("toggle", () => {
      if (details.open) {
        // Check if the details element is a submenu
        const isSubmenu = details.closest("#submenu") !== null;

        if (isSubmenu) {
          summary.style.backgroundColor = "#C85D40"; // Slightly lighter color for submenu when open
        } else {
          summary.style.backgroundColor = "#C04120"; // Main menu color when open
        }
        summary.style.color = "white";

        // Close other details elements on the same level
        detailsElements.forEach((otherDetails) => {
          if (details !== otherDetails) {
            const otherSummary = otherDetails.querySelector("summary");
            const otherIsSubmenu = otherDetails.closest("#submenu") !== null;

            if (isSubmenu === otherIsSubmenu) {
              otherDetails.open = false;
              if (otherSummary) {
                if (otherIsSubmenu) {
                  otherSummary.style.backgroundColor = "#A9A9A9"; // Reset to lighter gray when closed
                } else {
                  otherSummary.style.backgroundColor = "#404D40"; // Reset to initial main menu color
                }
                otherSummary.style.color = "white";
              }
            }
          }
        });
      } else {
        if (details.closest("#submenu")) {
          summary.style.backgroundColor = "#A9A9A9"; // Reset to lighter gray for submenus when closed
        } else {
          summary.style.backgroundColor = "#404D40"; // Reset to initial color for main menu when closed
        }
        summary.style.color = "white";
      }
    });
  });
});
