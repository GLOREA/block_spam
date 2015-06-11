var blockSpamsMethods = {
	_safix: "block_spams_dummy",
	_value_check_time: 33,			// 値変化の監視間隔
	_hidden_forms: [],

	_generate_hidden: function(serch_str, add_tag_origin){
		var safix = this._safix;
		var value_copy_from_dammy = this._value_copy_from_dammy;
		var value_copy_from_origin = this._value_copy_from_origin;
		var hidden_forms = [];
		regexp = new RegExp('^(.+)_' + safix + '$');
		$(serch_str).each(function(){
			var origin_tag = $(this);
			var origin_tag_name = origin_tag.attr('name');
			if(!regexp.test(origin_tag_name)) return false;

			var add_tag = add_tag_origin.clone(true);
			add_tag.attr('name', regexp.exec(origin_tag_name)[1]);
			add_tag.val(origin_tag.val());
			origin_tag.after(add_tag);
			origin_tag.bind('keyup', value_copy_from_dammy);
			hidden_forms.push(origin_tag.next());
			$.data(origin_tag.next(), safix, origin_tag.next().val());
		});
		this._hidden_forms = this._hidden_forms.concat(hidden_forms);
	},

	_generate_input_hidden: function() {
		this._generate_hidden("input[type='text']", $("<input type='hidden'>"));
	},

	_generate_textarea_hidden: function() {
		this._generate_hidden("textarea", $("<textarea style='display: none;'></textarea>"));
	},

	_add_before_submit: function(){
		var delete_dammy_value = this._delete_dammy_value;
		var safix = this._safix;
		$("form").bind('submit', function(){
			delete_dammy_value($(this), safix);
		});
	},

	_delete_dammy_value: function(form, safix){
		var delete_val = function(tag){
			regexp = new RegExp('^.+_' + safix + '$');
			if(!regexp.test(tag.attr('name'))) return false;
			tag.prop( "disabled", true );
		};

		form.find('input').each(function(){
			delete_val($(this));
		});

		form.find('textarea').each(function(){
			delete_val($(this));
		});

	},

	_hidden_value_check: function(){
		var $this = this;
		$.each(this._hidden_forms, function(){
			if(this.val() == $.data(this, $this._safix)) return true;
			$.data(this, $this._safix, this.val());
			var dammy = this.prev();
			if(dammy.val() == this.val()) return true;
			dammy.val(this.val());
		});
	},

	_value_copy_from_dammy: function(){
		var $this = $(this);
		$this.next().val($this.val());
	},

	_value_copy_from_origin: function(){
		var $this = $(this);
		var $dammy = $this.prev();
		if($this.val() !== $dammy.val()) $dammy.val($this.val());
	},

	init: function(options) {
		if(!options) options = {};
		if(options.safix) this._safix = options.safix;
		if(options.check_time) this._value_check_time = options.check_time;

		this._generate_input_hidden();
		this._generate_textarea_hidden();

		this._add_before_submit();

		var $this = this;
		setInterval(function(){ $this._hidden_value_check(); }, this._value_check_time);
	}
};
