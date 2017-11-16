({
	handleReadyCheck : function(cmp, event, helper) {
		cmp.set('v.numComponentsReady', cmp.get('v.numComponentsReady')+1);
        if(cmp.get('v.numComponentsReady') === 2){
            var allReady = $A.get("e.gsawers:AllReady");
            allReady.fire();
//
        }
	}
})
