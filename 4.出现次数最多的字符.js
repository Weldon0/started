var arrString = `abcdaabcbababababdfdsfasdfsdfsdfsdgfdfgfdtregadjkfhdsafhsdajkfhadsjk
fbajsdkhfjkasdhfjksdfhkjdsbfkjdsahf`;

const count = arrString.split('').reduce((prev, curr) => {
    prev[curr] ? prev[curr] ++ : prev[curr] = 1;
    return prev;
}, {});
console.log(count);