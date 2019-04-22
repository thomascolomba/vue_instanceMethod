var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  beforeCreate: function() {
	console.log("beforeCreate");
  },
  mounted: function() {
	this.$nextTick(function () {
		console.log("mounted.$nextTick");
	});
	console.log("mounted");
  },
  beforeUpdate: function() {
	console.log("beforeUpdate");
  },
  updated: function() {
	this.$nextTick(function () {
		console.log("updated.$nextTick");
	});
	console.log("updated");
  },
  beforeDestroy: function() {
	console.log("beforeDestroy");
  },
  errorCaptured: function(err, vm, info) {
	console.log("errorCaptured");
	return true;
  },
})