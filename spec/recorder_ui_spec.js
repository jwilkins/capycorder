// Generated by CoffeeScript 1.3.3
(function() {

  describe('RecoderUI', function() {
    var CHROME, ENTER_EVENT, ui;
    ui = null;
    ENTER_EVENT = $.Event('keypress', {
      'which': 13
    });
    CHROME = {
      extension: {
        getURL: function(path) {
          return "../" + path;
        }
      }
    };
    beforeEach(function() {
      return ui = new RecorderUI({
        chrome: CHROME
      });
    });
    afterEach(function() {
      return $('body #capycorder').remove();
    });
    describe('#create', function() {
      it('should generate the necessary HTML and append it', function() {
        expect($('body #capycorder')).not.toExist();
        ui.create();
        return expect($('body #capycorder')).toExist();
      });
      return it('should only generate the HTML once', function() {
        ui.create();
        ui.create();
        return expect($('body #capycorder').length).toEqual(1);
      });
    });
    describe('#show', function() {
      beforeEach(function() {
        return ui.create();
      });
      it('should make .capture-actions visible', function() {
        expect($('body #capycorder .capture-actions')).not.toBeVisible();
        ui.show('capture.actions');
        return expect($('body #capycorder .capture-actions')).toBeVisible();
      });
      it('should make .capture-matchers visible', function() {
        expect($('body #capycorder .capture-matchers')).not.toBeVisible();
        ui.show('capture.matchers');
        return expect($('body #capycorder .capture-matchers')).toBeVisible();
      });
      return it('should make .generate visible', function() {
        expect($('body #capycorder .generate')).not.toBeVisible();
        ui.show('generate');
        return expect($('body #capycorder .generate')).toBeVisible();
      });
    });
    describe('#showNamePrompt', function() {
      it('should trigger #create', function() {
        ui.showNamePrompt();
        return expect($('body #capycorder')).toExist();
      });
      return it('should show name prompt', function() {
        ui.showNamePrompt();
        return expect($('body #capycorder .prompt-name')).toBeVisible();
      });
    });
    return describe('submitting name prompt', function() {
      beforeEach(function() {
        return ui.showNamePrompt();
      });
      return it('should submit the form when pressing ENTER', function() {
        expect($('body #capycorder .prompt-name')).toBeVisible();
        spyOnEvent($('body #capycorder .prompt-name button'), 'click');
        runs(function() {
          return $('#capycorder-spec-name').trigger(ENTER_EVENT);
        });
        waits(ui.delayToHide * 1000);
        return runs(function() {
          return expect($('body #capycorder .prompt-name')).not.toBeVisible();
        });
      });
    });
  });

}).call(this);
