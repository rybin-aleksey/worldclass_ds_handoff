import { useEffect, useState, type ReactNode } from 'react';
import {
  AccordionCorporateProgram,
  ActionRow,
  Button,
  Checkbox,
  Chip,
  ClubCard,
  ClubImageAvatar,
  ClubRow,
  DateCell,
  FormPassportData,
  HeaderModal,
  HeaderNavbar,
  HelperText,
  Icon,
  ICON_NAMES,
  IconButtonClose,
  IconButtonLike,
  MembershipCard,
  OptionRowSwitch,
  PaymentMethod,
  Radio,
  RadioRow,
  SelectRow,
  Switch,
  TabBar,
  TabsSegmented,
  TextField,
  TrainerCardSmall,
  TrainerCardVertical,
  TrainerPhotoAvatar,
  TrainerPhotoSmall,
  TrainerPhotoVertical,
  TrainerRow,
  TrainingCardCompact,
  TrainingDescription,
  TrainingImageAvatar,
  TrainingImageCompact,
  TrainingRow,
  type ButtonSize,
  type ButtonState,
  type ButtonType,
  type ChipState,
  type ChipType,
  type HelperTextState,
  type TabBarTab,
} from './components';
import styles from './Showcase.module.css';

/* ---------- данные витрины ---------- */

const SEMANTIC_GROUPS: Array<[string, string[]]> = [
  ['bg', ['bg-mainWhite', 'bg-baseGray', 'bg-pictureBg', 'bg-grabber', 'bg-whiteOverlay10']],
  ['typography', ['typography-primary', 'typography-secondary', 'typography-white', 'typography-onDark', 'typography-success', 'typography-danger']],
  ['border', ['border-default', 'border-light']],
  ['icons', ['icons-primaryLine', 'icons-secondaryLine', 'icons-onDark']],
  ['tech', ['tech-error', 'tech-success']],
  ['clubs', ['clubs-red', 'clubs-green', 'clubs-black']],
  ['goals', ['goals-wellness', 'goals-weight-loss', 'goals-sport-recovery', 'goals-improve-health', 'goals-muscle-gain']],
  ['rating', ['rating-star']],
  ['buttons', [
    'buttons-primary-default-bg', 'buttons-primary-default-text', 'buttons-primary-active-bg',
    'buttons-primary-disable-bg', 'buttons-primary-disable-text',
    'buttons-secondary-default-bg', 'buttons-secondary-default-text', 'buttons-secondary-default-border',
    'buttons-secondary-active-bg', 'buttons-secondary-active-border',
    'buttons-secondary-disable-border', 'buttons-secondary-disable-text',
    'buttons-close-bg', 'buttons-close-bgDark',
  ]],
  ['chips', ['chips-selected-bg', 'chips-selected-text']],
];

const PRIMITIVE_SCALES = ['gray', 'brand', 'error', 'success', 'warning'];
const STEPS = [0, 50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950, 1000];

const TEXT_STYLES: Array<[string, string]> = [
  ['heading/medium_bold', 'ds-heading-medium_bold'],
  ['heading/medium', 'ds-heading-medium'],
  ['heading/small · 20/20', 'ds-heading-small-20'],
  ['heading/small · 20/24', 'ds-heading-small-24'],
  ['heading/text · Medium 18/18', 'ds-heading-text-18'],
  ['heading/text · 18/20', 'ds-heading-text-20'],
  ['heading/text · 18/24', 'ds-heading-text-24'],
  ['regular/text', 'ds-regular-text'],
  ['text-bold', 'ds-text-bold'],
  ['cart/title', 'ds-cart-title'],
  ['cart/chips', 'ds-cart-chips'],
  ['cart/text · 16/20', 'ds-cart-text-20'],
  ['cart/text · 16/24', 'ds-cart-text-24'],
  ['caption/cart_text · 14/14', 'ds-caption-cart_text-14'],
  ['caption/cart_text · 14/18', 'ds-caption-cart_text-18'],
  ['caption/small · 12/12', 'ds-caption-small-12'],
  ['caption/small · 12/16', 'ds-caption-small-16'],
];

const CHIP_VARIANTS: Array<[ChipType, ChipState]> = [
  ['time', 'not selected'], ['time', 'selected'],
  ['filter', 'not selected'], ['filter', 'selected'], ['filter', 'disabled'],
  ['tab', 'not selected'], ['tab', 'selected'],
  ['tag', 'default'], ['tag small', 'default'],
];

const WEEK = [['пн', '1'], ['вт', '2'], ['ср', '3'], ['чт', '4'], ['пт', '5'], ['сб', '6'], ['вс', '7']];

/* ---------- служебные блоки ---------- */

function useResolved(names: string[]) {
  const [values, setValues] = useState<Record<string, string>>({});
  useEffect(() => {
    const cs = getComputedStyle(document.documentElement);
    setValues(Object.fromEntries(names.map((n) => [n, cs.getPropertyValue(`--${n}`).trim()])));
  }, [names]);
  return values;
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={`${styles.sectionTitle} ds-heading-medium_bold`}>{title}</h2>
      {children}
    </section>
  );
}

function Specimen({ name, figmaId, children }: { name: string; figmaId: string; children: ReactNode }) {
  return (
    <div className={styles.specimen}>
      <div className={styles.specimenHead}>
        <span className="ds-text-bold">{name}</span>
        <code className={`${styles.code} ds-caption-small-16`}>{figmaId}</code>
      </div>
      <div className={styles.specimenBody}>{children}</div>
    </div>
  );
}

function Labeled({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className={styles.labeled}>
      <span className={`${styles.caption} ds-caption-small-16`}>{label}</span>
      {children}
    </div>
  );
}

const ALL_SEMANTIC = SEMANTIC_GROUPS.flatMap(([, n]) => n);
const ALL_PRIMITIVE = PRIMITIVE_SCALES.flatMap((s) => STEPS.map((st) => `${s}-${st}`));

/* ---------- страница ---------- */

export function Showcase() {
  const semantic = useResolved(ALL_SEMANTIC);
  const primitive = useResolved(ALL_PRIMITIVE);

  const [tab, setTab] = useState<TabBarTab>(1);
  const [segment, setSegment] = useState<0 | 1>(0);
  const [installment, setInstallment] = useState('6 месяцев');
  const [payment, setPayment] = useState('СБП');
  const [option, setOption] = useState(true);
  const [check, setCheck] = useState(true);
  const [day, setDay] = useState('3');
  const [time, setTime] = useState('15:00');
  const [liked, setLiked] = useState(true);

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1 className="ds-heading-medium_bold">World Class — React-база ДС</h1>
        <p className={`${styles.caption} ds-cart-text-20`}>
          Зеркало ds/foundation.md и ds/components.md. Иконки — SVG из Figma. Шрифт Avenir Next Cyr не вложен: если его нет в системе, работает фолбэк.
        </p>
        <nav className={styles.toc}>
          {['palette', 'primitives', 'type', 'actions', 'inputs', 'selection', 'navigation', 'cards', 'information', 'icons'].map((id) => (
            <a key={id} href={`#${id}`} className="ds-cart-chips">{id}</a>
          ))}
        </nav>
      </header>

      {/* ===== Палитра ===== */}
      <Section id="palette" title="Semantic-цвета">
        {SEMANTIC_GROUPS.map(([group, names]) => (
          <div key={group} className={styles.swatchGroup}>
            <h3 className={`${styles.groupTitle} ds-heading-text-20`}>{group}/*</h3>
            <div className={styles.swatches}>
              {names.map((n) => (
                <div key={n} className={styles.swatch}>
                  <span className={styles.chipColor} style={{ background: `var(--${n})` }} />
                  <span className="ds-caption-small-16">--{n}</span>
                  <span className={`${styles.caption} ds-caption-small-12`}>{semantic[n]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section id="primitives" title="Primitive-шкалы">
        {PRIMITIVE_SCALES.map((scale) => (
          <div key={scale} className={styles.scaleRow}>
            <span className={`${styles.scaleName} ds-cart-chips`}>{scale}</span>
            <div className={styles.scale}>
              {STEPS.map((st) => (
                <div key={st} className={styles.scaleStep} title={`--${scale}-${st} ${primitive[`${scale}-${st}`] ?? ''}`}>
                  <span className={styles.scaleColor} style={{ background: `var(--${scale}-${st})` }} />
                  <span className="ds-caption-small-12">{st}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* ===== Типографика ===== */}
      <Section id="type" title="Text styles">
        <div className={styles.typeList}>
          {TEXT_STYLES.map(([name, cls]) => (
            <div key={cls} className={styles.typeRow}>
              <code className={`${styles.code} ds-caption-small-16`}>{name}<br />.{cls}</code>
              <span className={cls}>Персональная тренировка в клубе</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== Actions ===== */}
      <Section id="actions" title="Actions">
        <Specimen name="Button" figmaId="40000176:697">
          <div className={styles.matrix}>
            {(['large', 'small'] as ButtonSize[]).flatMap((size) =>
              (['primary', 'secondary'] as ButtonType[]).flatMap((type) =>
                (['default', 'pressed', 'disabled'] as ButtonState[]).map((state) => (
                  <Labeled key={`${size}${type}${state}`} label={`${type} · ${state} · ${size}`}>
                    <Button type={type} state={state} size={size} label="Записаться" />
                  </Labeled>
                )),
              ),
            )}
          </div>
        </Specimen>
        <Specimen name="Action Row" figmaId="40000223:714">
          <div className={styles.stack}>
            <ActionRow label="Отправить квитанцию" icon="24px / receipt" />
            <ActionRow label="Создать шаблон" icon="24px / template" />
            <ActionRow label="Редактировать запись" icon="24px / edit" />
          </div>
        </Specimen>
        <Specimen name="Icon Button / Close" figmaId="40000490:677">
          <div className={styles.row}>
            <Labeled label="light"><IconButtonClose variant="light" /></Labeled>
            <Labeled label="overlay"><IconButtonClose variant="overlay" /></Labeled>
            <Labeled label="dark"><span className={styles.photoBg}><IconButtonClose variant="dark" /></span></Labeled>
          </div>
        </Specimen>
      </Section>

      {/* ===== Inputs ===== */}
      <Section id="inputs" title="Inputs">
        <Specimen name="Text Field" figmaId="2223:4571">
          <div className={styles.grid2}>
            {(['default', 'pressed', 'disabled'] as const).flatMap((role) =>
              [false, true].map((isIcon) => (
                <Labeled key={`${role}${isIcon}`} label={`role=${role} · isIcon=${isIcon}`}>
                  <TextField role={role} isIcon={isIcon} />
                </Labeled>
              )),
            )}
            <Labeled label="isHelperText · negative">
              <TextField isHelperText helperState="negative" helperText="Неверный код" placeholder="Код из СМС" />
            </Labeled>
            <Labeled label="isHelperText · success">
              <TextField isHelperText helperState="success" helperText="Код подтверждён" placeholder="Код из СМС" />
            </Labeled>
          </div>
        </Specimen>
        <Specimen name="Helper Text" figmaId="2223:4612">
          <div className={styles.row}>
            {(['default', 'negative', 'success', 'disabled'] as HelperTextState[]).map((s) => (
              <HelperText key={s} state={s} helperText={s} />
            ))}
          </div>
        </Specimen>
        <Specimen name="Select / Row" figmaId="40000434:731">
          <div className={styles.stack}>
            <SelectRow lines={1} title="Выберите время" />
            <SelectRow lines={2} title="Выберите время" subtitle="В клубе" />
            <SelectRow lines={2} title="Тариф" subtitle="Разовое посещение" icon="24px / rouble" showChevron={false} />
          </div>
        </Specimen>
        <Specimen name="Form / Passport Data" figmaId="40000478:651">
          <div className={styles.grid2}>
            <Labeled label="empty"><FormPassportData state="empty" /></Labeled>
            <Labeled label="filled"><FormPassportData state="filled" files={['IMG__.png', 'scan_02.pdf']} /></Labeled>
          </div>
        </Specimen>
        <Specimen name="Accordion / Corporate Program" figmaId="701:4604">
          <div className={styles.grid2}>
            <Labeled label="dropdown_isOpen=no"><AccordionCorporateProgram /></Labeled>
            <Labeled label="dropdown_isOpen=yes"><AccordionCorporateProgram defaultOpen /></Labeled>
          </div>
        </Specimen>
      </Section>

      {/* ===== Selection ===== */}
      <Section id="selection" title="Selection">
        <Specimen name="Checkbox · Radio · Switch" figmaId="1665:2354 · 1691:4450 · 761:4124">
          <div className={styles.row}>
            <Labeled label="checkbox yes"><Checkbox isActive label="Флажок" /></Labeled>
            <Labeled label="checkbox no"><Checkbox isActive={false} label="Флажок" /></Labeled>
            <Labeled label="interactive"><Checkbox isActive={check} onChange={(e) => setCheck(e.target.checked)} label="Флажок" /></Labeled>
            <Labeled label="radio yes"><Radio isActive label="Радио" /></Labeled>
            <Labeled label="radio no"><Radio isActive={false} label="Радио" /></Labeled>
            <Labeled label="switch false"><Switch isActive={false} label="Переключатель" /></Labeled>
            <Labeled label="switch true"><Switch isActive label="Переключатель" /></Labeled>
          </div>
        </Specimen>
        <Specimen name="Radio Row" figmaId="40000391:2983">
          <div className={styles.stack}>
            {['3 месяца', '6 месяцев', '12 месяцев'].map((l) => (
              <RadioRow key={l} name="installment" label={l} isActive={installment === l} onChange={() => setInstallment(l)} />
            ))}
          </div>
        </Specimen>
        <Specimen name="Option Row / Switch" figmaId="701:4405">
          <div className={styles.stack}>
            <OptionRowSwitch title="Фитнес-тестирование" isActive={option} onChange={(e) => setOption(e.target.checked)} />
            <OptionRowSwitch title="Персональная программа" isActive={false} />
          </div>
        </Specimen>
        <Specimen name="Payment Method" figmaId="1233:4768">
          <div className={styles.stack} role="radiogroup" aria-label="Способ оплаты">
            {['СБП', 'Наличными в клубе', 'Карта'].map((l) => (
              <PaymentMethod key={l} label={l} isActive={payment === l} onClick={() => setPayment(l)} />
            ))}
          </div>
        </Specimen>
        <Specimen name="Chip" figmaId="1214:7039">
          <div className={styles.row}>
            {CHIP_VARIANTS.map(([type, state]) => (
              <Labeled key={`${type}${state}`} label={`${type} · ${state}`}>
                <Chip type={type} state={state} label={type.startsWith('tag') ? 'Хатха-йога' : type === 'time' ? '15:00' : 'Все'} />
              </Labeled>
            ))}
          </div>
          <div className={styles.row}>
            {['09:00', '12:00', '15:00', '18:30'].map((t) => (
              <Chip key={t} type="time" label={t} state={time === t ? 'selected' : 'not selected'} onClick={() => setTime(t)} />
            ))}
          </div>
        </Specimen>
        <Specimen name="Date Cell" figmaId="1595:2255">
          <div className={styles.row}>
            <Labeled label="active=false · dotted"><DateCell day="пн" number="1" isDotted /></Labeled>
            <Labeled label="active=false"><DateCell day="пн" number="1" /></Labeled>
            <Labeled label="active=true"><DateCell day="пн" number="1" isActive /></Labeled>
          </div>
          <div className={styles.row}>
            {WEEK.map(([d, n]) => (
              <DateCell key={n} day={d} number={n} isDotted={n === '5'} isActive={day === n} onClick={() => setDay(n)} />
            ))}
          </div>
        </Specimen>
      </Section>

      {/* ===== Navigation ===== */}
      <Section id="navigation" title="Navigation">
        <div className={styles.phoneRow}>
          <Specimen name="Header / Navbar" figmaId="1025:7758">
            <div className={styles.phone}><HeaderNavbar title="Расписание" /></div>
          </Specimen>
          <Specimen name="Header / Modal" figmaId="1070:3790">
            <div className={`${styles.phone} ${styles.phoneGray}`}><HeaderModal title="Выберите время и дату" /></div>
          </Specimen>
          <Specimen name="Tab Bar" figmaId="407:2310">
            <div className={styles.stack}>
              {([1, 2, 3, 4, 5] as TabBarTab[]).map((n) => (
                <div key={n} className={styles.phone}><TabBar activeTab={n} /></div>
              ))}
              <Labeled label="interactive"><div className={styles.phone}><TabBar activeTab={tab} onChange={setTab} /></div></Labeled>
            </div>
          </Specimen>
          <Specimen name="Tabs / Segmented" figmaId="754:3617">
            <div className={styles.phone}><TabsSegmented activeIndex={segment} onChange={setSegment} /></div>
          </Specimen>
        </div>
      </Section>

      {/* ===== Cards ===== */}
      <Section id="cards" title="Cards">
        <Specimen name="Membership Card" figmaId="40000318:1090">
          <div className={styles.row}>
            {(['worldclass', 'kids', 'family'] as const).map((t) => (
              <MembershipCard key={`${t}c`} type={t} size="compact" />
            ))}
          </div>
          <div className={styles.row}>
            {(['worldclass', 'kids', 'family'] as const).map((t) => (
              <MembershipCard key={`${t}f`} type={t} size="full" />
            ))}
          </div>
        </Specimen>
        <Specimen name="Trainer Card / Vertical · Small" figmaId="1503:4407 · 40000419:672">
          <div className={styles.row}>
            <TrainerCardVertical name="Анастасия Андреенкова" category="Персональный тренер" price="от 3 790₽" isLiked={liked} onLikeToggle={() => setLiked(!liked)} />
            <TrainerCardVertical name="Виктор Кульпин" category="Элит-тренер" price="от 4 500₽" trainer={2} showExperience={false} showRating={false} />
            <TrainerCardSmall name={'Виктор\nКульпин'} />
          </div>
        </Specimen>
        <Specimen name="Training Card / Compact" figmaId="1706:2503">
          <div className={styles.row}>
            <TrainingCardCompact time="12:00" title="Total Stretch" instructor="Анастасия Андреенкова" isLiked />
            <TrainingCardCompact time="18:30" title="Хатха-йога" instructor="Виктор Кульпин" showAvailability={false} />
          </div>
        </Specimen>
        <Specimen name="Trainer Row · Training Row · Club Row" figmaId="40000427:729 · 40000432:699 · 40000432:707">
          <div className={styles.stack}>
            <TrainerRow name="Анастасия Андреенкова" category="Элит-тренер" />
            <TrainingRow title="Total Stretch" type="Персональная" />
            <ClubRow name="RedSide" address="ул. Сергея Макеева, 9 с.5" />
            <ClubRow name="RedSide" address="ул. Сергея Макеева, 9 с.5" showChevron />
          </div>
        </Specimen>
        <Specimen name="Club Card" figmaId="651:4915">
          <div className={styles.stack}>
            <ClubCard name="Щелковская" metro="м. Щелковская" metroColor="#8D489C" address="Щёлковское ш., д. 75, ТРЦ «Щёлковский» (отдельный вход на лифте)" />
          </div>
        </Specimen>
        <Specimen name="Icon Button / Like" figmaId="1665:3266">
          <div className={styles.row}>
            <Labeled label="isLiked=Yes"><IconButtonLike isLiked /></Labeled>
            <Labeled label="isLiked=No"><IconButtonLike /></Labeled>
          </div>
        </Specimen>
        <Specimen name="Медиа" figmaId="40000421:719 · :726 · :733 · 40000429:3342 · 40000432:680 · :683">
          <div className={styles.row}>
            <Labeled label="Trainer Photo / Small"><TrainerPhotoSmall /></Labeled>
            <Labeled label="Trainer Photo / Vertical"><TrainerPhotoVertical /></Labeled>
            <Labeled label="Trainer Photo / Avatar"><TrainerPhotoAvatar /></Labeled>
            <Labeled label="Training Image / Compact"><TrainingImageCompact /></Labeled>
            <Labeled label="Training Image / Avatar"><TrainingImageAvatar /></Labeled>
            <Labeled label="Club Image / Avatar"><ClubImageAvatar /></Labeled>
          </div>
        </Specimen>
      </Section>

      {/* ===== Information ===== */}
      <Section id="information" title="Information">
        <Specimen name="Training Description" figmaId="1398:3380">
          <div className={styles.grid2}>
            {[true, false].map((t) => (
              <Labeled key={String(t)} label={`isTruncate=${t ? 'Yes' : 'No'}`}>
                <TrainingDescription
                  defaultTruncate={t}
                  title="Yoga (уровень 1)"
                  description="Йога для начинающих нацелена на изучение основных классических асан, правильного дыхания и концентрации. Занятие подходит тем, кто только начинает практику: инструктор объясняет технику и помогает выстроить положение тела. Регулярные тренировки улучшают гибкость, осанку и самочувствие."
                />
              </Labeled>
            ))}
          </div>
        </Specimen>
      </Section>

      {/* ===== Icons ===== */}
      <Section id="icons" title="Icons">
        <div className={styles.row}>
          {ICON_NAMES.map((n) => (
            <Labeled key={n} label={n}>
              <span className={styles.iconCell}><Icon name={n} /></span>
            </Labeled>
          ))}
        </div>
      </Section>
    </div>
  );
}
