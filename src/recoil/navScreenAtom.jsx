const { atom } = require("recoil");

const navScreenAtom = atom({
    key: 'navScreenAtom',
    default: false
})

export default navScreenAtom;