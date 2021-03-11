exports.wait = () => {
	return`*「ESPERAR」 PROCESANDO*`
}

exports.succes = () => {
	return`*「 ÉXITOSO 」*`
}

exports.lvlon = () => {
	return`*「 HABILITAR 」 NIVELAR*`
}

exports.lvloff = () => {
	return`*「 DESHABILITAR 」 NIVELAR*`
}

exports.lvlnul = () => {
	return`*SU NIVEL AÚN ESTÁ VACÍO*`
}

exports.lvlnoon = () => {
	return`*NIVEL GRUB NO ACTIVADO*`
}

exports.noregis = () => {
	return`*「 REGISTRARSE 」*\n\n*como registrarse ${prefix}daftar NOMBRE|EDAD* \n*ejemplo ${prefix}daftar Ciruuss|15*`
}

exports.rediregis = () => {
	return`*「YA REGISTRADO 」*\n\n*Ya estás registrado en la base de datos de bot*`
}

exports.stikga = () => {
	return`*yah falló intentar repetir en un rato*`
}

exports.linkga = () => {
	return`*el enlace no es válido*`
}

exports.groupo = () => {
	return`*「SOLO GRUPO」*`
}

exports.ownerb = () => {
	return`*「SOLO PROPIETARIO BOT」*`
}

exports.ownerg = () => {
	return`*「SOLO PROPIETARIOS DEL GRUPO」*`
}

exports.admin = () => {
	return`*「SOLO ADMIN DEL GRUPO」*`
}

exports.badmin = () => {
	return`*「BOT DEBE SER ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW ESTA DESACTIVADO*`
}

exports.bug = () => {
	return`*Se han informado problemas al propietario del BOT, no se responderá a los informes falsos*`
}

exports.wrongf = () => {
	return`*Formato incorrecto/texto en blanco*`
}

exports.clears = () => {
	return`*borrar todo, éxito*`
}

exports.pc = () => {
	return`*「 REGISTRO 」*\n\npara saber si se ha registrado por favor revise el mensaje que le envié \n\nNOTE:\n*si no ha recibido un mensaje. significa que no ha guardado su número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATOS DEL PAÍS 」*\n\nya está registrado con los datos \n\n┏━⊱nombre\n┗⊱${namaUser}\n┏━⊱numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱edad\n┗⊱${umurUser}\n┏━⊱tiempo de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTA: no olvide este número porque es importante`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* no encontrado\intente escribir *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*lo siento pero ${pushname} no es la secuencia de comandos del propietario*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Sorry el nivel de ${pushname} no es suficiente*\n\n*┏⊱nivel : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱nivel condicional : ${aha}*\n\n_NOTE : CHAT / SIEMPRE ACTIVADO PARA OBTENER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Sorry el nivel de ${pushname} no es suficiente*\n\n*┏⊱nivel : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱nivel condicional : ${ahb}*\n\n_NOTE : CHAT / SIEMPRE ACTIVADO PARA OBTENER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Sorry el nivel de ${pushname} no es suficiente*\n\n*┏⊱nivel : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱nivel condicional : ${ahc}*\n\n_NOTE : CHAT / SIEMPRE ACTIVADO PARA OBTENER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Sorry el nivel de ${pushname} no es suficiente*\n\n*┏⊱nivel : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱nivel condicional : ${ahd}*\n\n_NOTE : CHAT / SIEMPRE ACTIVADO PARA OBTENER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Sorry el nivel de ${pushname} no es suficiente*\n\n*┏⊱nivel : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱nivel condicional : ${ahe}*\n\n_NOTE : CHAT / SIEMPRE ACTIVADO PARA OBTENER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Sorry el nivel de ${pushname} no es suficiente*\n\n*┏⊱nivel : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱nivel condicional : ${ahf}*\n\n_NOTE : CHAT / SIEMPRE ACTIVADO PARA OBTENER XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
┏━━━⊱  *SOBRE USUARIO*  ⊰━━┓
┣⊱ *Nombre* : ${pushname}
┣⊱ *Numero * : wa.me/${sender.split("@")[0]}
┣⊱ *Dinero* : Rp${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp} 
┣⊱ *Nivel* : ${getLevelingLevel(sender)}
┣⊱ *Registro Usuario* : ${_registered.length}
┗━━━⊱ ⸨ *BOT CIRUUSS* ⸩ ⊰━━━┛

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

┏━━━⊱ *MAKER MENU* ⊰━━━━━━┓
┣⊱ *${prefix}sticker* 
┣⊱ *${prefix}quotemaker* <text|author>
┣⊱ *${prefix}qrcode* <text>
┣⊱ *${prefix}ttp*
┣⊱ *${prefix}stickerhide* <text>
┣⊱ *${prefix}emoji*
┣━━⊱  *MENU DIVERTIDO* ⊰━━┫
┣⊱ *${prefix}lirik* <text>
┣⊱ *${prefix}artinama>
┣⊱ *${prefix}chord* <text>
┣⊱ *${prefix}bisakah* <teks>
┣⊱ *${prefix}kapankah* <teks>
┣⊱ *${prefix}apakah* <teks>
┣⊱ *${prefix}rate* <teks>
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid* <teks>
┣⊱ *${prefix}happymod* <teks>
┣━━━━━⊱ *MUTUO* ⊰━━━━━━━━━┫
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*
┣━━━━⊱ *MEDIA MENU* ⊰━━━━━┫
┣⊱ *${prefix}brainly* [error]
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan* <teks>
┣⊱ *${prefix}igstalk* <username>
┣⊱ *${prefix}bitly* <link>
┣⊱ *${prefix}tiktok* <username>
┣⊱ *${prefix}ssweb* <link>
┣⊱ *${prefix}kbbi* <text>
┣━━━⊱ *YT Y MUSICA* ⊰━━━━━┫
┣⊱ *${prefix}ytmp3* <link>
┣⊱ *${prefix}ytmp4* <link>
┣⊱ *${prefix}joox* <judul>
┣━━━⊱  *MENU NSFW* ⊰━━━━━━┫
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMITE Y DINERO* ⊰━━┫
┣⊱ *${prefix}limit* 
┣⊱ *${prefix}buylimit* <jumblah>
┣⊱ *${prefix}transfer* <tag |jumblah>
┣⊱ *${prefix}dompet*
┣⊱ *${prefix}leaderboard*
┣━━⊱ *MENU DE GRUPO* ⊰━━━━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}blocklist*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add* <tag>
┣⊱ *${prefix}kick* <tag>
┣⊱ *${prefix}setname* <teks>
┣⊱ *${prefix}setdesc* <teks>
┣⊱ *${prefix}demote* <tag>
┣⊱ *${prefix}promote* <tag>
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *MENU CREADOR* ⊰━━━━━┫
┣⊱ *${prefix}bc* <teks>
┣⊱ *${prefix}bcgc* <teks>
┣⊱ *${prefix}kickall* <rawan ban>
┣⊱ *${prefix}setreply* <teks>
┣⊱ *${prefix}setprefix* <symbol>
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block* <tag>
┣⊱ *${prefix}unblock* <tag>
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone* <tag>
┣⊱ *${prefix}setppbot*
┗━━⊱  ⸨ *BOT CIRUUSS* ⸩  ⊰━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 FELICIDADES 」*
┏⊱ *Nombre* : ${pushname}
┣⊱ *Numero* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* : +3
┣⊱ *Rol*: ${role}
┗⊱ *Nivel* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*lo siento el límite de ${pushname} hoy se agota*\n*límite de compra para obtener límite / subir de nivel*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 CONTAR LÍMITE 」*
el resto de tu límite : ${limitCounts}

NOTA : para llegar al límite. puede pasar de nivel o límite de compra`
}

exports.satukos = () => {
	return`*Agregar parámetro 1/habilitar o 0/deshabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nombre* : ${pushname}\n┣⊱ *Numero* : ${sender.split("@")[0]}\n┣⊱ *Dinero* : ${uangkau}\n┗━━━━━━━━━━`
}