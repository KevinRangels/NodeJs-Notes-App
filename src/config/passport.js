const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {

    //Match Email User
    const user = await User.findOne({email})
    if(!user){
        return done(null, false, {message: 'Not User Found'});
    }else{
        //Match Passowor User
        const match = await user.matchPassword(password)
        if(match) {
            return done(null, user)
        }else{
            return done(null, false, {message: 'Incorrect Password'})
        }

    }

}))
//Guarda el usuario en la session de nuestro servidor
passport.serializeUser((user, done) => {
    done(null, user.id)
})
//Usuario Navegando Passwort hace consulta a ver si esta logiado
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})

