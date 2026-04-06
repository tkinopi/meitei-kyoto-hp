'use client'
import { useState } from 'react'

type Tab = 'top' | 'menu' | 'info' | 'reserve'

export default function Home() {
  const [tab, setTab] = useState<Tab>('top')

  const navStyle = (t: Tab) => ({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '22px 20px',
    fontSize: '13px',
    letterSpacing: '0.14em',
    fontFamily: "'Shippori Mincho B1', serif",
    color: tab === t ? 'var(--accent)' : 'var(--text-muted)',
    borderBottom: tab === t ? '2px solid var(--accent)' : '2px solid transparent',
    whiteSpace: 'nowrap' as const,
    transition: 'color 0.2s',
  })

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'var(--white)',
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '0 48px',
      }}>
        <div className="site-header-inner">
          <div>
            <div style={{ fontSize: '22px', letterSpacing: '0.18em', fontWeight: 600 }}>めいてい</div>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--text-muted)', marginTop: '2px' }}>
              京都・河原町 日本料理
            </div>
          </div>
          <nav className="site-nav">
            {(['top', 'menu', 'info', 'reserve'] as Tab[]).map(t => (
              <button key={t} style={navStyle(t)} onClick={() => setTab(t)}>
                {t === 'top' ? 'TOP' : t === 'menu' ? 'お品書き' : t === 'info' ? '店舗情報' : 'ご予約'}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* TOP */}
      {tab === 'top' && (
        <div>
          {/* Hero */}
          <section className="hero-grid" style={{ minHeight: '560px' }}>
            <div className="hero-pad" style={{
              backgroundColor: 'var(--bg-dark)',
              color: 'var(--white)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '80px 60px',
            }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '20px' }}>
                KYOTO KAWARAMACHI — MEITEI
              </div>
              <h1 className="hero-title" style={{ fontWeight: 600, marginBottom: '24px' }}>
                旬の一品と<br />厳選<br />カウンターで。
              </h1>
              <p style={{ fontSize: '14px', lineHeight: 2, color: '#C8BBA8', maxWidth: '360px' }}>
                京都・寺町通り近く。季節の食材を丁寧に仕立てた和の肴と、
                全国から集めた地酒をゆっくりとお楽しみください。
              </p>
              <div style={{ marginTop: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setTab('reserve')}
                  style={{
                    background: 'var(--accent)',
                    color: '#fff',
                    border: 'none',
                    padding: '14px 32px',
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    cursor: 'pointer',
                    fontFamily: "'Shippori Mincho B1', serif",
                    whiteSpace: 'nowrap',
                  }}
                >
                  ご予約・お問い合わせ
                </button>
                <button
                  onClick={() => setTab('menu')}
                  style={{
                    background: 'none',
                    color: 'var(--white)',
                    border: '1px solid #6B5A42',
                    padding: '14px 32px',
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    cursor: 'pointer',
                    fontFamily: "'Shippori Mincho B1', serif",
                    whiteSpace: 'nowrap',
                  }}
                >
                  お品書きを見る
                </button>
              </div>
            </div>
            <div className="hero-deco" style={{
              background: 'linear-gradient(135deg, #2A1F0E 0%, #4A3420 50%, #C0392B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
            }}>
              <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.15)', fontSize: '120px', lineHeight: 1 }}>
                酒
              </div>
            </div>
          </section>

          {/* Michelin badge */}
          <div style={{
            backgroundColor: 'var(--accent)',
            color: '#fff',
            textAlign: 'center',
            padding: '14px 24px',
            fontSize: '12px',
            letterSpacing: '0.2em',
          }}>
            ミシュランガイド京都・大阪 2019 ビブグルマン掲載
          </div>

          {/* Features */}
          <section className="main-pad" style={{ paddingTop: '72px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '12px' }}>CONCEPT</div>
              <h2 className="section-title" style={{ fontWeight: 600 }}>ぁいていについて</h2>
            </div>
            <div className="grid-3">
              {[
                {
                  num: '一',
                  title: '旬の食材',
                  desc: '京の市場から毎日仕入れる新鮮な食材を使い、季節ごとに変わる一品料理をご用意しています。',
                },
                {
                  num: '二',
                  title: '地酒の充実',
                  desc: '全国の蔵元から厳選した日本酒を豊富に取り揃え。燗酒・冷酒どちらもご対応します。',
                },
                {
                  num: '三',
                  title: 'カウンター席',
                  desc: '一人でも気軽に入れるカウンターのみのお店。料理人との会話も楽しみのひとつです。',
                },
              ].map((f) => (
                <div key={f.num} style={{
                  padding: '48px 36px',
                  backgroundColor: 'var(--white)',
                  borderRight: '1px solid var(--border)',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '48px',
                    color: 'var(--accent)',
                    marginBottom: '16px',
                    fontFamily: "'Shippori Mincho B1', serif",
                    opacity: 0.4,
                  }}>{f.num}</div>
                  <h3 style={{ fontSize: '16px', letterSpacing: '0.12em', marginBottom: '16px', fontWeight: 600 }}>{f.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 2 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hours quick view */}
          <section style={{
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--white)',
            padding: '60px 48px',
          }}>
            <div className="info-bar">
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '8px' }}>HOURS & ACCESS</div>
                <h2 className="section-title" style={{ fontWeight: 600 }}>営業時間・アクセス</h2>
              </div>
              <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '6px' }}>営業時間</div>
                  <div style={{ fontSize: '18px', letterSpacing: '0.05em' }}>15:00〜深夜</div>
                  <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>不定休</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '6px' }}>アクセス</div>
                  <div style={{ fontSize: '14px' }}>京都市中京区円福寺前町277</div>
                  <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>阪急 京都河原町駅 徒歩5分</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '6px' }}>お電話</div>
                  <div style={{ fontSize: '18px', letterSpacing: '0.05em' }}>075-221-2750</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* MENU */}
      {tab === 'menu' && (
        <div className="main-pad" style={{ paddingTop: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '12px' }}>MENU</div>
            <h2 className="section-title" style={{ fontWeight: 600 }}>お品書き</h2>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '12px' }}>
              ※ 食材の仕入れにより内容が変わります。季節の一品はお気軽にお尋ねください。
            </p>
          </div>

          {/* お酒 */}
          <section style={{ marginBottom: '60px' }}>
            <h3 style={{
              fontSize: '16px',
              letterSpacing: '0.2em',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '12px',
              marginBottom: '2px',
              fontWeight: 600,
            }}>お酒</h3>
            <div className="grid-2-menu">
              {[
                ['生ビール', '¥ 600'],
                ['日本酒（一合）', '¥ 700〜'],
                ['燗酒', '¥ 750〜'],
                ['焼酎', '¥ 650〜'],
                ['ハイボール', '¥ 550'],
                ['ノンアルコール', '¥ 450'],
              ].map(([name, price]) => (
                <div key={name} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '18px 20px',
                  borderBottom: '1px solid var(--border)',
                  backgroundColor: 'var(--white)',
                }}>
                  <span style={{ fontSize: '14px' }}>{name}</span>
                  <span style={{ fontSize: '14px', color: 'var(--accent)', whiteSpace: 'nowrap' }}>{price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 料理 */}
          <section style={{ marginBottom: '60px' }}>
            <h3 style={{
              fontSize: '16px',
              letterSpacing: '0.2em',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '12px',
              marginBottom: '2px',
              fontWeight: 600,
            }}>おつまみ・一品料理</h3>
            <div className="grid-2-menu">
              {[
                ['だし巻き玉子', '¥ 600'],
                ['自家製おでん盛り合わせ', '¥ 950'],
                ['焼き鳥（もも/ねぎま）', '¥ 180〜'],
                ['刺身盛り合わせ', '¥ 1,100'],
                ['京漬物盛り合わせ', '¥ 500'],
                ['季節の一品（要確認）', '¥ 時価'],
                ['締めご飯・お茶漬け', '¥ 450'],
                ['味噌汁', '¥ 200'],
              ].map(([name, price]) => (
                <div key={name} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '18px 20px',
                  borderBottom: '1px solid var(--border)',
                  backgroundColor: 'var(--white)',
                }}>
                  <span style={{ fontSize: '14px' }}>{name}</span>
                  <span style={{ fontSize: '14px', color: 'var(--accent)', whiteSpace: 'nowrap' }}>{price}</span>
                </div>
              ))}
            </div>
          </section>

          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 2 }}>
            価格はすべて税込みです。仕入れ状況によりメニューが変わる場合がございます。<br />
            アレルギーのある方はお気軽にお申し付けください。
          </p>
        </div>
      )}

      {/* INFO */}
      {tab === 'info' && (
        <div className="main-pad" style={{ paddingTop: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '12px' }}>INFO</div>
            <h2 className="section-title" style={{ fontWeight: 600 }}>店舗情報・アクセス</h2>
          </div>

          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {[
                    ['店名', '、いてい'],
                    ['ジャンル', '日本料理・居酒屋'],
                    ['住所', '京都市中京区円福寺前町277'],
                    ['電話', '075-221-2750'],
                    ['営業時間', '15:00〜深夜（ラストオーダーはお確かめください）'],
                    ['定休日', '不定休'],
                    ['席数', 'カウンター席のみ'],
                    ['予算', '¥4,000〜¥5,000（目安）'],
                  ].map(([label, value]) => (
                    <tr key={label} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{
                        padding: '16px 12px',
                        fontSize: '12px',
                        letterSpacing: '0.12em',
                        color: 'var(--text-muted)',
                        width: '120px',
                        verticalAlign: 'top',
                        whiteSpace: 'nowrap',
                      }}>{label}</td>
                      <td style={{ padding: '16px 12px', fontSize: '14px', lineHeight: 1.8 }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              {/* Map placeholder */}
              <div style={{
                backgroundColor: '#E8DFD0',
                height: '280px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border)',
                marginBottom: '20px',
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>📍</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.8 }}>
                  京都市中京区円福寺前町277<br />
                  <a
                    href="https://maps.google.com/?q=めいてい+京都+円福寺前町"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '12px' }}
                  >
                    Googleマップで開く →
                  </a>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--white)', padding: '24px', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '14px', letterSpacing: '0.12em', marginBottom: '12px', fontWeight: 600 }}>アクセス</h3>
                <ul style={{ listStyle: 'none', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 2.2 }}>
                  <li>🚃 阪急 京都河原町駅 徒歩約5分</li>
                  <li>🚃 京阪 祇園四条駅 徒歩約8分</li>
                  <li>🚌 市バス「河原町三条」下車 徒歩2分</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RESERVE */}
      {tab === 'reserve' && (
        <div className="main-pad" style={{ paddingTop: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: '12px' }}>CONTACT</div>
            <h2 className="section-title" style={{ fontWeight: 600 }}>ご予約・お問い合わせ</h2>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '12px', lineHeight: 2 }}>
              お電話またはSNSのDMにてお気軽にどうた。<br />
              当日のご予約・お席のご確認もお電話て承ります。
            </p>
          </div>

          <div className="contact-grid" style={{ maxWidth: '700px', margin: '0 auto 48px' }}>
            <a
              href="tel:075-221-2750"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '48px 24px',
                backgroundColor: 'var(--bg-dark)',
                color: 'var(--white)',
                textDecoration: 'none',
                gap: '12px',
              }}
            >
              <span style={{ fontSize: '28px' }}>📞</span>
              <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>お電話</span>
              <span style={{ fontSize: '20px', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>075-221-2750</span>
              <span style={{ fontSize: '11px', color: '#888' }}>15:00〜深夜</span>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '48px 24px',
                backgroundColor: 'var(--white)',
                color: 'var(--text)',
                textDecoration: 'none',
                gap: '12px',
                border: '1px solid var(--border)',
              }}
            >
              <span style={{ fontSize: '28px' }}>📷</span>
              <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--text-muted)' }}>Instagram</span>
              <span style={{ fontSize: '14px', letterSpacing: '0.05em' }}>DMでの
(�+xᨸ����[��[O^���۝�^�N�	�L\	���܎�	ݘ\�KXX��[�
I�_O�YZ]ZW��[����[����O���]����]��[O^�X^�Y�	��	��X\��[��	�]]���Y[�Έ	�̜	���X��ܛ�[���܎�	ݘ\�K]�]JI���ܙ\��	�\��Y�\�KX�ܙ\�I��^[Yێ�	��[�\���_O����[O^���۝�^�N�	�M\	�]\��X�[�Έ	��L�[I�X\��[����N�	�M�	��۝�ZY��
�_O��e9.�9i%8�k��`��a8�i��d��o�ς�[�[O^��\��[N�	ۛۙI��۝�^�N�	�L�	���܎�	ݘ\�K]^[]]Y
I�[�RZY����^[Yێ�	�Y�	�_O��O������੸�������9k��� ��k��o��k��g��x�k��b�ke��b�ࢸ�g8�ex�a8�o��fB�O�����e9.�9�!8�k��b�f��*lx�o��g��k�[��Yܘ[Hx�j��i��o�ࢸ�o��fO�O��O����ਸ��8���૸��8����e:)�y�&��k�.��bcx�j��b���x�x�f��c��h8�ex�a�O��O����od���x�k��x������������k��j����nx�c��e:`(��hxस�b�hf8�a8�e��o��fO�O���[���]����]���
_B���ʈ���\�
��B����\��[O^��X��ܛ�[���܎�	ݘ\�KX��Y\��I����܎�	��	��Y[�Έ	�
	��^[Yێ�	��[�\����۝�^�N�	�L�	��]\��X�[�Έ	��Y[I��[�RZY������_O��]��[O^���۝�^�N�	�N	���܎�	ݘ\�K]�]JI�X\��[����N�	�	�]\��X�[�Έ	��N[I�_O��x�a8�i��a�]���]��.�:`�yn �.+y.�9c.�a����k�bcy�.����;�#�S�
�KL��KL��L�]���]��[O^��X\��[���	�	�_O�e���ky�`�e�ΈMN�8�'9��yi';�"9.#yk��/${�"O�]���]��[O^��X\��[���	̌	��۝�^�N�	�L\	���܎�	��MMI�_O��H��8�x�a8�i��a[�Y���\�\��Y��]���ٛ��\����]���
B�B
