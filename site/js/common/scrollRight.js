Ext.isiPad = navigator.userAgent.match(/iPad/i) != null;
Ext.isiPhone = navigator.userAgent.match(/iPhone/i) != null;
//TODO: Add support for more devices like Android etc. here.
Ext.isMobileDevice = Ext.isiPad || Ext.isiPhone;

Ext.override(Ext.Panel, {
  afterRender: Ext.Function.createSequence(Ext.Panel.prototype.afterRender, function() {
    if (this.getXType() == 'panel') {
      this._getIScrollElement = function() {
        return (this.el.child('.x-panel-body', true));
      }
    }

    if (this.autoScroll && Ext.isMobileDevice) {
      if (this._getIScrollElement) {
        this._updateIScroll();
        this.on('afterlayout', this._updateIScroll);
      }
    }
  }),

  _ensureIScroll: function() {
    if (!this.iScroll) {
      var el = this._getIScrollElement();
      if (el.children.length > 0) {
        this.iScroll = new iScroll(el);
        this.iScrollTask = new Ext.util.DelayedTask(this._refreshIScroll, this);
      }
    }
  },

  _updateIScroll: function() {
    this._ensureIScroll();
    if (this.iScroll) {
      this.iScrollTask.delay(1000);
    }
  },

  _refreshIScroll: function() {
    this.iScroll.refresh();
    this.iScrollTask.delay(1000);
  }
});

Ext.override(Ext.tree.TreePanel, {
  _getIScrollElement: function() {
    return (this.el.child('.x-panel-body', true));
  }
});

Ext.override(Ext.grid.GridPanel, {
  _getIScrollElement: function() {
    return (this.el.child('.x-grid3-scroller', true));
  },

  afterRender: Ext.Function.createSequence(Ext.grid.GridPanel.prototype.afterRender, function() {
    this.view.on('refresh', this._updateIScroll, this);
  })
});
