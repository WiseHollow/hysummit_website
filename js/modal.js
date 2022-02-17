const modalButtons = $("a[data-js-toggle='modal']");
modalButtons.each(function() {
  const button = $(this);
  const dataTarget = $(this).attr('data-js-target');
  if (dataTarget) {
    const modalTargets = $(dataTarget);
    if (modalTargets.length == 0) {
      console.log('data-target not found: ' + dataTarget);
      return;
    }

    const modalTarget = modalTargets[0];
    const closeButton = $(modalTarget).find('.close');

    // modalTarget.onclick = function() {
    //   console.log('click');
    // };
    button.on('click', function() {
      modalTarget.style.display = "block";
    });

    closeButton.on('click', function() {
      modalTarget.style.display = "none";
    });

    window.addEventListener('click', (event) => {
      if (event.target == modalTarget) {
        modalTarget.style.display = "none";
      }
    })
  } else {
    console.log("'data-target' not set within modal.");
    return;
  }
})
