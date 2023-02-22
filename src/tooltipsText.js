import React from 'react'
import ReactDOM from 'react-dom'

let tooltips = {
    Lantern: <div className='tooltiptext'>Lantern that shines brightly</div>,
    PotionofStrength: <div className='tooltiptext'>A potion that restores your Stamina</div>,
    Escape: <div className='tooltiptext'>You will LOSE 2 STAMINA points!<br/>(1 if you're lucky)</div>,
    Key99: <div className='tooltiptext'>A bronze coloured key with the number 99 carved into it</div>,
    Provisions: <div className='tooltiptext'>Each provision restores 4 STAMINA points</div>,
    SilkyBlackGlove: <div className='tooltiptext'>A mysterious glove</div>,
    GoldenCrescent: <div className='tooltiptext'>An iron shield with a golden crescent that may give you +1 DMG resistance</div>,
    BowArrow: <div className='tooltiptext'>A magnificent bow and a silver arrow</div>,
    Cheese: <div className='tooltiptext'>A large piece of sweet-smelling Cheese</div>,
    IronHelmet: <div className='tooltiptext'>An enchanted helmet. Gives you +1 Attack Strength</div>,
    LightSword: <div className='tooltiptext'>A light sword. Gives you +1 SKILL</div>,
};

export default tooltips;