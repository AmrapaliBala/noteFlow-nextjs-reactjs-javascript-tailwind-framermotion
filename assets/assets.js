import user_image from './user-image.png';
// import code_icon from './code-icon.png';
// import code_icon_dark from './code-icon-dark.png';

import add from './add.png';
import add_dark from './add_dark.png';
import view from './view.png';
// import edu_icon from './edu-icon.png';
// import edu_icon_dark from './edu-icon-dark.png';
import edit from './edit.png';
import edit_dark from './edit_dark.png';
// import project_icon from './project-icon.png';
// import project_icon_dark from './project-icon-dark.png';
import delete_icon from './delete_icon.png';
import delete_dark from './delete_dark.png';
// import vscode from './vscode.png';
import nextjs from './nextjs.png';
import atom from './atom.png';
import js from './js.png';
import nodejs from './nodejs.png';
import tailwind from './tailwind.png';
// import firebase from './firebase.png';
// import figma from './figma.png';
// import git from './git.png';
// import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
// import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';

import note from './note.png';
// import download_icon from './download-icon.png';
import jigsaw from './jigsaw.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
// import web_icon from './web-icon.png';
// import mobile_icon from './mobile-icon.png';
// import ui_icon from './ui-icon.png';
// import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    // code_icon,
    add,add_dark,view,
    // code_icon_dark,
    // edu_icon,
    // edu_icon_dark,
    edit,edit_dark,
    // project_icon,
    // project_icon_dark,
    delete_icon,delete_dark,nextjs,atom,js,nodejs,tailwind,
    // firebase,
    // figma,
    // git,
    // mongodb,
    right_arrow_white,
    logo,
    mail_icon,
    mail_icon_dark,
    profile_img,

    note,
    // download_icon,
    jigsaw,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    // web_icon,
    // mobile_icon,
    // ui_icon,
    // graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

// export const workData = [
//     {
//         title: 'Create a Note',
//         description: 'Web Design',
//         bgImage: '/work-1.png',
//     },
//     {
//         title: 'Organize Notes',
//         description: 'Mobile App',
//         bgImage: '/work-2.png',
//     },
//     {
//         title: 'Edit Content',
//         description: 'Web Design',
//         bgImage: '/work-3.png',
//     },
//     {
//         title: 'Delete Notes',
//         description: 'UI/UX Design',
//         bgImage: '/work-4.png',
//     },
// ]

export const serviceData = [
    { icon: assets.add_dark, title: 'Create Notes', description: 'Write and save notes in seconds.', link: '' },
    { icon: assets.view, title: 'View Notes', description: 'Access all your saved notes in one organized dashboard.', link: '' },
    { icon: assets.edit_dark, title: 'Update Notes', description: 'Edit existing notes anytime.', link: '' },
    { icon: assets.delete_dark, title: 'Delete Notes', description: 'Remove outdated notes with a single click.', link: '' },
]

export const infoList = [
    { icon: assets.add, iconDark: assets.add_dark, title:'Create Notes', description: 'Quickly write down ideas, tasks, and important information.' },
    { icon: assets.edit, iconDark: assets.edit_dark, title: 'Edit Notes', description: 'Update your notes whenever your information changes.' },
    { icon: assets.delete_icon, iconDark: assets.delete_dark, title: 'Delete Notes', description: 'Keep your workspace clean by removing unnecessary notes.' }
];

export const toolsData = [
    assets.atom, assets.nextjs, assets.js, assets.nodejs, assets.tailwind
];