import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import { CommandInteraction, MessageEmbed } from 'discord.js';
import { BRANDING_COLOR, BRANDING_SERVER, BRANDING_WEBSITE } from '../../config';

@ApplyOptions<CommandOptions>({
	description: 'Help',
	requiredClientPermissions: ['SEND_MESSAGES'],
	chatInputCommand: {
		register: true,
		guildIds: ['638455519652085780']
	}
})
export class UserCommand extends Command {
	public async chatInputRun(interaction: CommandInteraction) {
		const embed = new MessageEmbed()
			.setTimestamp()
			.setAuthor(
				this.container.client.user!.username,
				this.container.client.user!.displayAvatarURL({
					dynamic: true,
					format: 'png',
					size: 2048
				})
			)
			.setColor(BRANDING_COLOR)
			.setTitle('Woof  ━  The Discord Dream')
			.setFooter('Made possible by the team at Chat & Share 💛')
			.addField('> Perfected Music System', '_ _　− Crystal clear \n_ _　− Spotify support', true)
			.addField('> Server Customizability', '_ _　− Levels system \n_ _　− Moderation & auto-mod', true)
			.addField(
				'_ _　',
				`For a list of all my commands, run \`/commands\`\n \nVisit [my website](${BRANDING_WEBSITE}) for more information!\nJoin my [Discord server](https://${BRANDING_SERVER}) for community events, a great hangout, and bot support! \n \n:gem:　Premium unlocks great things! [Learn more](${BRANDING_WEBSITE})`
			);

		return interaction.reply({
			embeds: [embed]
		});
	}
}
