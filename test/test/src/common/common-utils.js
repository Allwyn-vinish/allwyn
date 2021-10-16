export const generateCheckSum = (data,apiKey) => {
    var crypto = require('crypto');
   // alert("data : " + data)
    //alert("apiKey : " + apiKey)
    var hash = crypto.createHmac('sha256', apiKey).update(data);
    var checkSum = hash.digest('base64')
    //alert("checksum : " + checkSum);
    return checkSum;
};


export const sha256HashingGenerator = (props) => {
    //alert("called");
    //var props = {"age":"one","name":true};
    var dataString = JSON.stringify(props);
    console.log("Generator input : "+ dataString);
    var apiKey = "kjsuigfeh247nbf88j9u";
    var checkSum = generateCheckSum(dataString,apiKey);
    //alert("Checksum hashing : " + checkSum);
    var outputData = {"data":props,"error":false,"checksum":checkSum};
    console.log("Generator Output : " + JSON.stringify(outputData))
    return outputData;
};

export const sha256HashingValidator = (props) =>{
    var inputchecksum = props.checksum;
    var data = props.data;
    var dataString = JSON.stringify(data);
    var apiKey = "kjsuigfeh247nbf88j9u";
    console.log("Input checksum : " + inputchecksum);
    var checkSum = generateCheckSum(dataString,apiKey);
    console.log("Generated checksum : " + checkSum);
    if (inputchecksum == checkSum){
       // alert("true");
        var outputData = {"data":data,"error":false};
        console.log("Output data : " + JSON.stringify(outputData));
        return outputData;
    } else {
       // alert("false");
        var outputData = {"error":true,"message":"validation fails"};
        console.log("Output data : " + JSON.stringify(outputData));
        return outputData;
    }
};