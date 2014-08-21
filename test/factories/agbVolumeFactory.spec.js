describe('agbVolumeFactory', function(){
	var agbVolume;

	beforeEach(module('agb'));

	beforeEach(inject(function(_agbVolume_){
		agbVolume = _agbVolume_;
	}));

	it('should be defined', function(){
		expect(agbVolume).toBeDefined();
	});

	it('should have a list method', function(){
		expect(typeof agbVolume.list).toEqual('function');
	});

	it('should have a get method', function(){
		expect(typeof agbVolume.get).toEqual('function');
	})
});