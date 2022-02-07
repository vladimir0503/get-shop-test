const url = 'http://apilayer.net/api/validate?access_key=bced8ef8773925ced61cdf87a61f36ec';

const checkNumber = async num => {
    const res = await fetch(`${url}&number=$7${num}`);
    const data = await res.json();
    return data.valid;
};

export default checkNumber;