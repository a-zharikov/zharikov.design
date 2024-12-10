function aspectRatioCalculator() {
  const widthInput = document.getElementById("width");
  const heightInput = document.getElementById("height");
  const aspectRatioRadios = document.querySelectorAll('input[name="direction"]');
  const aspectRatioCode = document.getElementById("aspectratioCode");
  const copyButton = document.getElementById("copyCode");
  const copyMessage = document.getElementById("copyMessage");

  // Helper to parse the selected aspect ratio
  function getSelectedAspectRatio() {
    const selectedRadio = document.querySelector('input[name="direction"]:checked');
    if (selectedRadio) {
      const [width, height] = selectedRadio.value.split("-").map(Number);
      return { width, height };
    }
    return null;
  }

  // Update height or width based on aspect ratio
  function updateDimensions() {
    const aspectRatio = getSelectedAspectRatio();
    if (!aspectRatio) return;

    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);

    if (document.activeElement === widthInput && width) {
      heightInput.value = Math.round((width / aspectRatio.width) * aspectRatio.height);
    } else if (document.activeElement === heightInput && height) {
      widthInput.value = Math.round((height / aspectRatio.height) * aspectRatio.width);
    } else if (width) {
      heightInput.value = Math.round((width / aspectRatio.width) * aspectRatio.height);
    }

    updateAspectRatioCode();
  }

  // Force update dimensions when aspect ratio changes
  function onAspectRatioChange() {
    const aspectRatio = getSelectedAspectRatio();
    if (!aspectRatio) return;

    const width = parseFloat(widthInput.value) || 1280; // Default width
    widthInput.value = width; // Ensure width is not empty
    heightInput.value = Math.round((width / aspectRatio.width) * aspectRatio.height);

    updateAspectRatioCode();
  }

  // Update the textarea with the CSS code
  function updateAspectRatioCode() {
    const width = widthInput.value || 0;
    const height = heightInput.value || 0;
    aspectRatioCode.value = `width: ${width}px;\nheight: ${height}px;`;
  }

  // Copy the CSS code to clipboard
  copyButton.addEventListener("click", function () {
    aspectRatioCode.select(); // Select the content of the textarea
    try {
      const successful = document.execCommand("copy"); // Copy to clipboard
      if (successful) {
        copyMessage.innerHTML = `<span class="badge medium success">Скопировано!</span>`;
        setTimeout(() => (copyMessage.innerHTML = ""), 2000);
      } else {
        throw new Error("Copy command failed");
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  });

  // Event listeners for inputs and radio buttons
  widthInput.addEventListener("input", updateDimensions);
  heightInput.addEventListener("input", updateDimensions);
  aspectRatioRadios.forEach((radio) => radio.addEventListener("change", onAspectRatioChange));

  // Initialize with default aspect ratio
  onAspectRatioChange(); 
}