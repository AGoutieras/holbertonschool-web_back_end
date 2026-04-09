# Python - Async Function

Ce dossier contient une serie d'exercices sur la programmation asynchrone en Python avec `asyncio`.
L'objectif est de comprendre la difference entre coroutine, tache (`Task`) et execution concurrente,
tout en manipulant les annotations de type.

## Objectifs pedagogiques

- Ecrire et executer des coroutines avec `async def` et `await`.
- Lancer plusieurs coroutines de maniere concurrente.
- Mesurer l'impact de la concurrence sur le temps d'execution.
- Utiliser `asyncio.create_task` pour creer des taches explicites.
- Manipuler les types de retour avec `typing.List` et `asyncio.Task`.

## Contenu du dossier

| Fichier                      | Description                                                                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `0-basic_async_syntax.py`    | Definit `wait_random(max_delay)` : attend un delai aleatoire puis retourne ce delai.                                                   |
| `1-concurrent_coroutines.py` | Definit `wait_n(n, max_delay)` : lance `n` coroutines `wait_random` en parallele et retourne les delais tries par ordre de completion. |
| `2-measure_runtime.py`       | Definit `measure_time(n, max_delay)` : mesure le temps moyen d'execution par coroutine.                                                |
| `3-tasks.py`                 | Definit `task_wait_random(max_delay)` : retourne une `asyncio.Task` pour `wait_random`.                                                |
| `4-tasks.py`                 | Definit `task_wait_n(n, max_delay)` : version de `wait_n` basee sur des taches.                                                        |
| `tests/`                     | Scripts de verification pour chaque exercice (`0-main.py` a `4-main.py`).                                                              |

## Arborescence

```text
python_async_function/
|- 0-basic_async_syntax.py
|- 1-concurrent_coroutines.py
|- 2-measure_runtime.py
|- 3-tasks.py
|- 4-tasks.py
|- README.md
`- tests/
	|- 0-main.py
	|- 1-main.py
	|- 2-main.py
	|- 3-main.py
	`- 4-main.py
```

## Pre-requis

- Python 3.9+
- Un environnement virtuel active (recommande)

## Execution des tests

Depuis la racine du projet:

```bash
cd python_async_function
python3 tests/0-main.py
python3 tests/1-main.py
python3 tests/2-main.py
python3 tests/3-main.py
python3 tests/4-main.py
```

## Concepts importants

- `async def` declare une coroutine.
- `await` suspend l'execution jusqu'au resultat d'une operation asynchrone.
- `asyncio.as_completed(...)` permet de recuperer les resultats dans l'ordre ou ils se terminent.
- `asyncio.create_task(...)` planifie une coroutine comme tache concurrente.
- La concurrence permet de reduire le temps total lorsque les operations sont principalement en attente (I/O, temporisations, etc.).

## Notes

- Les delais sont aleatoires (`random.uniform`), donc les resultats varient a chaque execution.
- Dans `wait_n` et `task_wait_n`, la liste finale est naturellement ordonnee croissante car les taches sont collectees selon leur fin d'execution.
