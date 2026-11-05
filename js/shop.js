/**
 * Dojo Shop & Inventory Module: "道場商店"
 * Allows learners to spend earned Koban gold coins on Sakura Hearts,
 * Streak Freeze Amulets (Omamori), Double XP potions, and Tanuki Mochi outfit skins!
 */

window.NihongoShop = (function() {

  const SHOP_ITEMS = [
    {
      id: 'hearts_refill',
      category: 'powerup',
      name: 'Sakura Heart Refill (満開の桜)',
      desc: 'Instantly restore all 5 Sakura Hearts so you can continue your quest without waiting.',
      icon: '❤️',
      price: 50,
      action: 'refill_hearts'
    },
    {
      id: 'streak_freeze',
      category: 'powerup',
      name: 'Streak Freeze Amulet (お守り)',
      desc: 'Protects your daily streak if you miss a day of practice. Equips automatically.',
      icon: '🛡️',
      price: 100,
      action: 'add_streak_freeze'
    },
    {
      id: 'double_xp',
      category: 'powerup',
      name: 'Double XP Scroll (倍増の巻物)',
      desc: 'Earn 2x XP for all lesson answers and arcade games for the next 15 minutes!',
      icon: '⚡',
      price: 80,
      action: 'activate_double_xp'
    }
  ];

  const AVATAR_SKINS = [
    {
      id: 'mochi_novice',
      name: 'Novice Mochi (見習いモチ)',
      desc: 'Energetic blue student headband. Ready for first steps in Japanese!',
      price: 0,
      icon: '🥋'
    },
    {
      id: 'mochi_ninja',
      name: 'Ninja Mochi (忍者モチ)',
      desc: 'Stealth cowl and shuriken. Moves as silently as a silent glottal stop!',
      price: 150,
      icon: '🥷'
    },
    {
      id: 'mochi_kimono',
      name: 'Kimono Mochi (着物モチ)',
      desc: 'Festive sakura yukata and floral hairpin for temple festivals.',
      price: 200,
      icon: '👘'
    },
    {
      id: 'mochi_samurai',
      name: 'Samurai Mochi (侍モチ)',
      desc: 'Honor and courage! Wields a bamboo bokken and red kabuto crest.',
      price: 250,
      icon: '⚔️'
    },
    {
      id: 'mochi_sensei',
      name: 'Sensei Mochi (先生モチ)',
      desc: 'Scholar glasses and master calligraphy brush. Pure wisdom!',
      price: 300,
      icon: '🎓'
    }
  ];

  function openShopModal() {
    let modal = document.getElementById('dojo-shop-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'dojo-shop-modal';
      modal.className = 'modal-overlay';
      document.body.appendChild(modal);
    }

    renderShopContent();
    modal.style.display = 'flex';
  }

  function closeShopModal() {
    const modal = document.getElementById('dojo-shop-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  function renderShopContent() {
    const modal = document.getElementById('dojo-shop-modal');
    if (!modal) return;

    const state = window.NihongoState ? window.NihongoState.getState() : { koban: 150, hearts: 5, streakFreezes: 1, activeAvatar: 'mochi_novice', unlockedAvatars: ['mochi_novice'] };

    modal.innerHTML = `
      <div class="modal-card shop-modal-card">
        <!-- Shop Header -->
        <div class="shop-header-row">
          <div>
            <span class="hub-level-badge" style="background: var(--c-kin); color: #000;">🏪 Dojo Market</span>
            <h2 class="mt-1" style="font-size: 1.6rem; font-weight: 800;">道場商店 • The Dojo Shop</h2>
            <p class="section-sub">Spend your hard-earned Koban gold coins on power-ups and custom Tanuki Mochi outfits!</p>
          </div>
          <div class="shop-currency-pill">
            <span style="font-size: 1.4rem;">🪙</span>
            <span id="shop-koban-balance" style="font-size: 1.25rem; font-weight: 900;">${state.koban || 0}</span>
            <span style="font-size: 0.85rem; color: var(--text-muted); margin-left: 0.2rem;">Koban</span>
          </div>
        </div>

        <!-- Section 1: Power-ups -->
        <div class="shop-section mt-4">
          <h3 class="shop-section-title">⚡ Training Power-Ups</h3>
          <div class="shop-items-grid mt-2">
            ${SHOP_ITEMS.map(it => {
              const isHeartsMax = it.action === 'refill_hearts' && state.hearts >= 5;
              return `
                <div class="shop-item-card card">
                  <div class="shop-item-icon-wrap">${it.icon}</div>
                  <div class="shop-item-details">
                    <div class="shop-item-name">${it.name}</div>
                    <div class="shop-item-desc">${it.desc}</div>
                    <div class="shop-item-status mt-1">
                      ${it.action === 'refill_hearts' ? `Current: ${state.hearts}/5 Hearts` : ''}
                      ${it.action === 'add_streak_freeze' ? `In Inventory: ${state.streakFreezes || 0} Amulet(s)` : ''}
                    </div>
                  </div>
                  <div class="shop-item-action">
                    <button class="btn btn-primary btn-sm btn-shop-buy" ${isHeartsMax ? 'disabled' : ''} onclick="NihongoShop.buyItem('${it.id}')">
                      ${isHeartsMax ? 'Full ❤️' : `🪙 ${it.price}`}
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Section 2: Tanuki Mochi Wardrobe -->
        <div class="shop-section mt-4">
          <h3 class="shop-section-title">👘 Mochi the Tanuki Outfits</h3>
          <div class="shop-avatars-grid mt-2">
            ${AVATAR_SKINS.map(av => {
              const isUnlocked = (state.unlockedAvatars || ['mochi_novice']).includes(av.id);
              const isEquipped = (state.activeAvatar || 'mochi_novice') === av.id;

              return `
                <div class="shop-avatar-card card ${isEquipped ? 'avatar-equipped' : ''}">
                  <div class="avatar-preview-box">
                    ${window.NihongoMascot ? window.NihongoMascot.renderSvg('happy', av.id, 80) : av.icon}
                  </div>
                  <div class="avatar-info mt-2">
                    <div class="avatar-name">${av.name}</div>
                    <div class="avatar-desc">${av.desc}</div>
                  </div>
                  <div class="avatar-actions mt-3">
                    ${isEquipped ? `
                      <button class="btn btn-secondary btn-sm" disabled style="width: 100%;">
                        ✔ Equipped
                      </button>
                    ` : (isUnlocked ? `
                      <button class="btn btn-accent btn-sm" style="width: 100%;" onclick="NihongoShop.equipAvatar('${av.id}')">
                        Equip
                      </button>
                    ` : `
                      <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="NihongoShop.buyAvatar('${av.id}', ${av.price})">
                        🪙 ${av.price} Koban
                      </button>
                    `)}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Close Button -->
        <div class="shop-footer mt-4 text-center">
          <button class="btn btn-secondary" onclick="NihongoShop.closeShopModal()">
            Done Shopping
          </button>
        </div>
      </div>
    `;
  }

  function buyItem(itemId) {
    const item = SHOP_ITEMS.find(it => it.id === itemId);
    if (!item || !window.NihongoState) return;

    if (!window.NihongoState.spendKoban(item.price)) {
      if (window.NihongoAudio) window.NihongoAudio.playError();
      alert('Not enough Koban gold coins! Complete quest path lessons or daily missions to earn more coins.');
      return;
    }

    if (item.action === 'refill_hearts') {
      window.NihongoState.refillHearts();
      if (window.NihongoAudio) window.NihongoAudio.playSuccess();
      window.NihongoState.notifyNotification('🌸 Sakura Hearts fully restored to 5/5!', 'success');
    } else if (item.action === 'add_streak_freeze') {
      window.NihongoState.addStreakFreeze();
      if (window.NihongoAudio) window.NihongoAudio.playSuccess();
      window.NihongoState.notifyNotification('🛡️ Streak Freeze Amulet added to inventory!', 'success');
    } else if (item.action === 'activate_double_xp') {
      if (window.NihongoAudio) window.NihongoAudio.playSuccess();
      window.NihongoState.notifyNotification('⚡ Double XP active for the next 15 minutes!', 'success');
    }

    renderShopContent();
    if (window.NihongoApp) {
      window.NihongoApp.updateHeaderStats();
    }
  }

  function buyAvatar(avatarId, price) {
    if (!window.NihongoState) return;

    if (!window.NihongoState.spendKoban(price)) {
      if (window.NihongoAudio) window.NihongoAudio.playError();
      alert('Not enough Koban gold coins! Complete quest path lessons to earn more coins.');
      return;
    }

    window.NihongoState.unlockAvatar(avatarId);
    window.NihongoState.equipAvatar(avatarId);

    if (window.NihongoAudio) window.NihongoAudio.playFanfare();
    window.NihongoState.notifyNotification(`🎉 Unlocked and equipped ${avatarId.replace('mochi_', '').toUpperCase()} Mochi!`, 'success');

    renderShopContent();
    if (window.NihongoApp) {
      window.NihongoApp.refreshRoadmap();
    }
  }

  function equipAvatar(avatarId) {
    if (!window.NihongoState) return;
    window.NihongoState.equipAvatar(avatarId);
    if (window.NihongoAudio) window.NihongoAudio.playClick();
    renderShopContent();
    if (window.NihongoApp) {
      window.NihongoApp.refreshRoadmap();
    }
  }

  return {
    openShopModal,
    closeShopModal,
    buyItem,
    buyAvatar,
    equipAvatar
  };
})();
