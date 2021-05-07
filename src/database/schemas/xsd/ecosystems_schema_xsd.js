const ecosystemSchemaXsd = '<?xml version="1.0" encoding="UTF-8" ?>' +
    '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">' +
    '' +
    '    <xs:complexType name="ecosystem-types">' +
    '        <xs:all>' +
    '            <xs:element name="address" type="xs:string" maxOccurs="1"/>' +
    '            <xs:element name="location" type="xs:string" maxOccurs="1"/>' +
    '            <xs:element name="postcode" type="xs:string" maxOccurs="1"/>' +
    '        </xs:all>' +
    '    </xs:complexType>' +
    '' +
    '    <xs:element name="ecosystem" type="ecosystem-types"/>' +
    '</xs:schema>';

module.exports = ecosystemSchemaXsd;
