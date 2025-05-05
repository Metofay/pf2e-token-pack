class PathfinderBestiaryTokenPack {
  static async initSettings() {
    this.keys = [
      { key: "pathfinder-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Pathfinder Bestiary") },
      { key: "pathfinder-bestiary-2", name: game.i18n.localize("PF2E-TOKEN-PACK.Pathfinder Bestiary 2") },
      { key: "pathfinder-bestiary-3", name: game.i18n.localize("PF2E-TOKEN-PACK.Pathfinder Bestiary 3") },
      { key: "pathfinder-monster-core", name: game.i18n.localize("PF2E-TOKEN-PACK.Pathfinder Monster Core") },
      { key: "pathfinder-npc-core", name: game.i18n.localize("PF2E-TOKEN-PACK.Pathfinder NPC Core") },
      { key: "abomination-vaults-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Abomination Vaults Bestiary") },
      { key: "age-of-ashes-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Age of Ashes Bestiary") },
      { key: "agents-of-edgewatch-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Agents of Edgewatch Bestiary") },
      { key: "blood-lords-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Blood Lords Bestiary") },
      { key: "curtain-call-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Curtain Call Bestiary") },
      { key: "extinction-curse-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Extinction Curse Bestiary") },
      { key: "fists-of-the-ruby-phoenix-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Fists of the Ruby Phoenix Bestiary") },
      { key: "gatewalkers-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Gatewalkers Bestiary") },
      { key: "outlaws-of-alkenstar-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Outlaws of Alkenstar Bestiary") },
      { key: "kingmaker-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Kingmaker Bestiary") },
      { key: "quest-for-the-frozen-flame-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Quest for the Frozen Flame Bestiary") },
      { key: "season-of-ghosts-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Season of Ghosts Bestiary") },
      { key: "seven-dooms-for-sandpoint-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Seven Dooms for Sandpoint Bestiary") },
      { key: "sky-kings-tomb-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Sky King's Tomb Bestiary") },
      { key: "strength-of-thousands-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Strength of Thousands Bestiary") },
      { key: "stolen-fate-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Stolen Fate Bestiary") },
      { key: "wardens-of-wildwood-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Wardens of Wildwood Bestiary") },
      { key: "book-of-the-dead-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Book of the Dead Bestiary") },
      { key: "blog-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Paizo Blog Bestiary") },
      { key: "howl-of-the-wild-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Howl of the Wild Bestiary") },
      { key: "lost-omens-impossible-lands-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Lost Omens Impossible Lands Bestiary") },
      { key: "lost-omens-mwangi-expanse-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Lost Omens Mwangi Expanse Bestiary") },
      { key: "lost-omens-highhelm-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Lost Omens Highhelm Bestiary") },
      { key: "lost-omens-monsters-of-myth-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Lost Omens Monsters of Myth Bestiary") },
      { key: "lost-omens-tian-xia-world-guide", name: game.i18n.localize("PF2E-TOKEN-PACK.Lost Omens Tian Xia World Guide Bestiary") },
      { key: "lost-omens-travel-guide-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Lost Omens Travel Guide Bestiary") },
      { key: "npc-gallery", name: game.i18n.localize("PF2E-TOKEN-PACK.NPC Gallery") },
      { key: "pathfinder-dark-archive", name: game.i18n.localize("PF2E-TOKEN-PACK.Pathfinder Dark Archive") },
      { key: "rage-of-elements-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Rage of Elements Bestiary") },
      { key: "war-of-immortals-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.War of Immortals Bestiary") },
      { key: "fall-of-plaguestone-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Fall of Plaguestone Bestiary") },
      { key: "malevolence-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Malevolence Bestiary") },
      { key: "menace-under-otari-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Menace Under Otari Bestiary") },
      { key: "one-shot-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.One Shot Bestiary") },
      { key: "prey-for-death-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Prey for Death Bestiary") },
      { key: "rusthenge-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Rusthenge Bestiary") },
      { key: "shadows-at-sundown-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Shadows at Sundown Bestiary") },
      { key: "the-enmity-cycle-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.The Enmity Cycle Bestiary") },
      { key: "the-slithering-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.The Slithering Bestiary") },
      { key: "troubles-in-otari-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Troubles in Otari Bestiary") },
      { key: "night-of-the-gray-death-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Night of the Gray Death Bestiary")},
      { key: "crown-of-the-kobold-king-bestiary", name: game.i18n.localize("PF2E-TOKEN-PACK.Crown of the Kobold King Bestiary") },
      { key: "paizo-pregens", name: game.i18n.localize("PF2E-TOKEN-PACK.Paizo Pregens") },
      { key: "iconics", name: game.i18n.localize("PF2E-TOKEN-PACK.Iconics") }
    ];

    this.previousSettings = {};
    this.settingsChanged = true;

    this.keys.forEach(({key, name, hint}) => {
      game.settings.register("pf2e-token-pack", `enableOverwrite${key}`, {
        name: name,
        hint: hint,
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => this.onSettingChange(),
      });

      this.previousSettings[`enableOverwrite${key}`] = game.settings.get("pf2e-token-pack", `enableOverwrite${key}`);
    });
  }


  static init() {

    game.socket.on("module.pf2e-token-pack", async data => {
      if (data.action === "overwriteBestiary" && game.user.isGM) {
        await this.updateBestiary(true);
      }
    });
  }

  static async fetchBestiaryData() {
    const response = await fetch('modules/pf2e-token-pack/bestiaries.json');
    if (!response.ok) throw new Error("Failed to fetch bestiaries.json");
    return await response.json();
  }

  static async uploadBestiary(data, fileName) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const result = await FilePicker.upload("data", "modules/pf2e-token-pack", new File([blob], fileName), {});
    if (result.status !== "success") throw new Error(`Failed to upload ${fileName}`);
  }

  static async updateBestiary(reload = false) {
    try {
      let bestiaryData = await this.fetchBestiaryData();
      let modified = false;

      for (const { key } of this.keys) {
        const enableOverwrite = game.settings.get("pf2e-token-pack", `enableOverwrite${key}`);
        const keyedKey = `${key}Ю`;

        if (enableOverwrite && !(keyedKey in bestiaryData)) {
          bestiaryData = this.modifyKeys(bestiaryData, key, keyedKey);
          modified = true;
        } else if (!enableOverwrite && (keyedKey in bestiaryData)) {
          bestiaryData = this.modifyKeys(bestiaryData, keyedKey, key);
          modified = true;
        }

        this.previousSettings[`enableOverwrite${key}`] = enableOverwrite;
      }

      if (modified) {
        await this.uploadBestiary(bestiaryData, "bestiaries.json");
      }

      if (reload && modified) {
        window.location.reload();  // Перезагружаем страницу после изменения файла
      } else if (reload) {
        ui.notifications.info(game.i18n.localize("PF2E-TOKEN-PACK.NoChanges"));
      }

    } catch (error) {
      console.error(error);
      ui.notifications.error(`An error occurred while updating bestiaries.json: ${error.message}`);
    }
  }

  static modifyKeys(data, oldKey, newKey) {
    if (oldKey in data) {
      data[newKey] = data[oldKey];
      delete data[oldKey];
    }
    return data;
  }

  static async onSettingChange() {
    this.settingsChanged = true;
    this.debouncedUpdateBestiary();
  }

  static debouncedUpdateBestiary() {
    clearTimeout(this.debouncedUpdateBestiaryTimeout);
    this.debouncedUpdateBestiaryTimeout = setTimeout(async () => {
      await this.updateBestiary(false);
      if (this.settingsChanged) {
        this.showReloadDialog();
        this.settingsChanged = false;
      }
    }, 300); // Задержка перед обновлением файла для предотвращения частых перезаписей
  }

  static async showReloadDialog() {
    new Dialog({
      title: game.i18n.localize("PF2E-TOKEN-PACK.ReloadDialogTitle"),
      content: `<p>${game.i18n.localize("PF2E-TOKEN-PACK.ReloadDialogContent")}</p>`,
      buttons: {
        ok: {
          label: game.i18n.localize("PF2E-TOKEN-PACK.ReloadButton"),
          callback: () => window.location.reload(),
        },
        cancel: {
          label: game.i18n.localize("PF2E-TOKEN-PACK.LaterButton"),
          callback: () => this.showPostponeDialog(),},
        },
        default: "ok",
      }).render(true);
    }
  
    static async showPostponeDialog() {
      new Dialog({
        title: game.i18n.localize("PF2E-TOKEN-PACK.PostponeDialogTitle"),
        content: `<p>${game.i18n.localize("PF2E-TOKEN-PACK.PostponeDialogContent")}</p>`,
        buttons: {
          ok: {
            label: game.i18n.localize("PF2E-TOKEN-PACK.UnderstoodButton"),
            callback: () => console.log("User acknowledged the postponed settings notification."),
          },
        },
        default: "ok",
      }).render(true);
    }
  }
  
  // Инициализация модуля
  Hooks.once('init', () => PathfinderBestiaryTokenPack.init());
  Hooks.once('ready', () => PathfinderBestiaryTokenPack.initSettings());

  // Заголовки и доп.текст в настройках
  Hooks.on("renderSettingsConfig", (app, html, data) => {
    // Текст
    $('<div>').addClass('form-group group-header').html(game.i18n.localize("PF2E-TOKEN-PACK.settingsMessage")).insertBefore('[data-setting-id="pf2e-token-pack.enableOverwritepathfinder-bestiary"]');

    // Доп заголовки
    $('<h2>').addClass('form-group group-header').html(game.i18n.localize("PF2E-TOKEN-PACK.bestiaries")).insertBefore('[data-setting-id="pf2e-token-pack.enableOverwritepathfinder-bestiary"]');
    $('<h2>').addClass('form-group group-header').html(game.i18n.localize("PF2E-TOKEN-PACK.adventure path")).insertBefore('[data-setting-id="pf2e-token-pack.enableOverwriteabomination-vaults-bestiary"]');
    $('<h2>').addClass('form-group group-header').html(game.i18n.localize("PF2E-TOKEN-PACK.rulebook")).insertBefore('[data-setting-id="pf2e-token-pack.enableOverwritebook-of-the-dead-bestiary"]');
    $('<h2>').addClass('form-group group-header').html(game.i18n.localize("PF2E-TOKEN-PACK.standalone adventure")).insertBefore('[data-setting-id="pf2e-token-pack.enableOverwritefall-of-plaguestone-bestiary"]');
    $('<h2>').addClass('form-group group-header').html(game.i18n.localize("PF2E-TOKEN-PACK.pregenerated pcs")).insertBefore('[data-setting-id="pf2e-token-pack.enableOverwritepaizo-pregens"]');

    $('section[data-tab="pf2e-token-pack"] p.notes').css("min-height", 0).css("margin", 0);
  })