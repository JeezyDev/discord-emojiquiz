const { ActionRowBuilder, ButtonBuilder, ButtonStyle, InteractionType, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { inlineCode, codeBlock } = require('discord.js');
exports.emojiquizContent = {
    title: '**Emojiquiz**',
    description: 'If you have any issues to solve that emojiquiz then you can click the buttons to get some help.',
    fields: {
        first: 'βSearched word',
        second: 'βHint',
        status_text: 'Status',
        status: inlineCode("π‘ Pending")
    },
    color: '#FFFFFF',
    footer: {
        text: 'Emojiquiz ~ solved the last emojiquiz! π',
        skip_text: '~ skipped the last emojiquiz! π',
        iconURL: 'https://i.imgur.com/OHN3crW.png',
        textonstart: '~ solved the last emojiquiz! π'
    },
    solution: `That's how it will look like!\nSearched word:`,
    buttons: {
        skip: {
            label: 'Skip word',
            style: ButtonStyle.Secondary,
            emoji: 'β©'
        },
        first_letter: {
            label: 'First Letter',
            style: ButtonStyle.Secondary,
            emoji: 'β‘'
        },
        suggest_new_quiz: {
            label: 'Suggest new quiz',
            style: ButtonStyle.Secondary,
            emoji: 'π€³'
        },
        emojiquiz_decline: {
            label: 'Decline',
            style: ButtonStyle.Danger
        },
        emojiquiz_accept: {
            label: 'Accept',
            style: ButtonStyle.Success
        }
    },
    word_reaction: {
        right_word: 'β',
        wrong_word: 'β'
    },
    alreadyExist: {
        suggest_new_quiz_text: 'This word already exist.',
        create_new_quiz_text: 'This word already exist.'
    },
    first_letter_text: 'The first letter is a',
    moderation_status: {
        accept_text: '**Status:**\n',
        accept_status: inlineCode("π’ Accepted"),
        decline_text: '**Status:**\n',
        decline_status: inlineCode("π΄ Denied"),
        accept_color: '#00f700',
        decline_color: '#e71837',
        pending_color: '#9b8f22',
        solution: inlineCode("Solution")
    },
    moderation_roles: {
        roles: ["emojiquiz", "jeezyDevelopment"]
    },
    suggest_new_quiz_pop_up: {
        title: 'Emojiquiz suggestion',
        emoji_word: {
            label: 'Word in emoji',
            placeholder: 'Enter word in emojis.'
        },
        emoji_hint: {
            label: 'Hint',
            placeholder: 'Give a hint.'
        },
        emoji_searched: {
            label: 'Searched Word',
            placeholder: 'Enter the searched word.'
        }
    }
}