'use strict'
const callbackFunction = require('../callback')

describe('Testing callbacks', ()=>{
    test('Case 1 Callback', (done)=>{
        function otherCallback(data){
            expect(data).toBe('desired value')
            done()
        }
        callbackFunction(otherCallback)
    })
})