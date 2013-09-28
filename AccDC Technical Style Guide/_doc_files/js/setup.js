(function(){

	$A.bind(window, 'load', function(){
		var apiToggles = [], moduleToggles = [], ariaToggles = [], eventToggles = [];

		$A.query('div.AccDC > dl > dt > a', function(i, o){
			apiToggles.push(new $A.Toggle(o,
							{
							state: false,
							callback: function(state){
								if (state){
									$A.addClass(this, 'pressed');
									$A.remClass(this.parentNode.parentNode, 'hdn');
								}

								else{
									$A.remClass(this, 'pressed');
									$A.addClass(this.parentNode.parentNode, 'hdn');
								}
								return true;
							}
							}));
		});

		$A.query('div.Modules > dl > dt > a', function(i, o){
			moduleToggles.push(new $A.Toggle(o,
							{
							state: false,
							callback: function(state){
								if (state){
									$A.addClass(this, 'pressed');
									$A.remClass(this.parentNode.parentNode, 'hdn');
								}

								else{
									$A.remClass(this, 'pressed');
									$A.addClass(this.parentNode.parentNode, 'hdn');
								}
								return true;
							}
							}));
		});

		$A.query('div.ARIA > dl > dt > a', function(i, o){
			ariaToggles.push(new $A.Toggle(o,
							{
							state: false,
							callback: function(state){
								if (state){
									$A.addClass(this, 'pressed');
									$A.remClass(this.parentNode.parentNode, 'hdn');
								}

								else{
									$A.remClass(this, 'pressed');
									$A.addClass(this.parentNode.parentNode, 'hdn');
								}
								return true;
							}
							}));
		});

		$A.query('div.Events > dl > dt > a', function(i, o){
			eventToggles.push(new $A.Toggle(o,
							{
							state: false,
							callback: function(state){
								if (state){
									$A.addClass(this, 'pressed');
									$A.remClass(this.parentNode.parentNode, 'hdn');
								}

								else{
									$A.remClass(this, 'pressed');
									$A.addClass(this.parentNode.parentNode, 'hdn');
								}
								return true;
							}
							}));
		});

		$A.bind('div.expand-collapse > a', 'click', function(ev){
			var o = this, a = null, c = false;

			if (o.id == 'col-1'){
				a = apiToggles;
				c = true;
			}

			else if (o.id == 'exp-1'){
				a = apiToggles;
				c = false;
			}

			else if (o.id == 'col-2'){
				a = moduleToggles;
				c = true;
			}

			else if (o.id == 'exp-2'){
				a = moduleToggles;
				c = false;
			}

			else if (o.id == 'col-3'){
				a = ariaToggles;
				c = true;
			}

			else if (o.id == 'exp-3'){
				a = ariaToggles;
				c = false;
			}

			else if (o.id == 'col-4'){
				a = eventToggles;
				c = true;
			}

			else if (o.id == 'exp-4'){
				a = eventToggles;
				c = false;
			}

			for (var i = 0; i < a.length; i++)
							a[i].set(c ? false : true);
			$A.announce(c ? 'Collapsed' : 'Expanded');
			ev.preventDefault();
		});

		$A.bind('div.topLink > a', 'click', function(ev){
			$A.setFocus($A.query('h1')[0]);
			ev.preventDefault();
		});

		$A.bind('#mlto',
						{
						click: function(ev){
							this.href = 'mailto:bryan.garaventa@whatsock.com';
						},
						blur: function(ev){
							this.href = '#';
						}
						});

		createHeaderNav();

		SyntaxHighlighter.defaults['gutter'] = false;
		SyntaxHighlighter.all();

		var verNode = $A.getEl('AccDCCurrentVerS1');

		if (verNode && $A.version){
			verNode.innerHTML = ('Currently running AccDC API version: ' + $A.version).announce();
		}

		if (window.navigator.onLine)
			// Check for updates
			$A.getScript('http://api.whatsock.com/tsg-updates.js');
	});

	var hds = {}, createHeaderNav = function(){
		var ph = $A.getEl('skipLinks'), hs = $A.query('div.hd > h2');
		hds = {};

		for (var i = 0; i < hs.length; i++){
			var h = hs[i];

			if (ph && h.className !== 'skip'){
				h.id = 'H' + $A.genId();
				var a = $A.createEl('a',
								{
								href: '#'
								}, null, h.id, document.createTextNode($A.getText(h)));

				ph.appendChild(a);
				$A.setAttr(h, 'tabindex', -1);
				hds[h.id] = h;
				$A.bind(a, 'click', function(ev){
					hds[this.className].focus();
					ev.preventDefault();
				});

				if (i < (hs.length - 1))
					ph.appendChild($A.createEl('span', null, null, null, document.createTextNode(' | ')));
			}
		}
	};
})();