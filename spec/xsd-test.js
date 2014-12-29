var expect = require('chai').expect,
    libxmljs = require('libxmljs'),
    fs = require('fs');

describe('The Rope XSD', function() {
    describe('When validating some known good XML files', function() {
        var xsdFile = fs.readFileSync('xsd/rope.xsd', {encoding: 'utf-8'}),
            xsd = libxmljs.parseXml(xsdFile);
        
        fs.readdirSync('spec/xml').forEach(function(file) {
            it('Validates ' + file, function() {
                var xmlFile = fs.readFileSync('spec/xml/' + file, {encoding: 'utf-8'}),
                    xml = libxmljs.parseXml(xmlFile);
                
                expect(xml.validate(xsd)).to.equal(true);
                expect(xml.validationErrors).to.be.empty;
            });
        });
    });
});