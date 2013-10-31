
<H2>Conversor de Data</H2>

<H3> Sobre </H3>
Simples conversor de data para timestamp e timestamp para data.

<H3> Features </H3>
* Apartir de uma data obter timestamp;
* Apartir de um timestamp obter a data;
* Converter mais de um registro e misturados;
* Definir o tipo de separador ( espaço, nova linha, hífen e etc );
* Possibilidade de definir a máscara;


<H3>  Definições das Máscaras: </H3>
<table>
<thead>
	<tr>
		<th>Field</th>
		<th>Syntax</th>
		<th>Parse</th>
		<th>Format</th>
	</tr>
</thead>
<tbody>
	<tr><td>Year</td><td>yyyy</td><td>4 digits</td><td>4 digits</td></tr>
	<tr><td>Year</td><td>yy</td><td>2 digits</td><td>2 digits</td></tr>
	<tr><td>Year</td><td>y</td><td>2 or 4 digits</td><td>4 digits</td></tr>

	<tr><td>Month</td><td>MMM</td><td>Name or Abbreviation</td><td>Name</td></tr>
	<tr><td>Month</td><td>NNN</td><td>Abbreviation</td><td>Abbreviation</td></tr>
	<tr><td>Month</td><td>MM</td><td>2 digits (01-12)</td><td>2 digits (01-12)</td></tr>
	<tr><td>Month</td><td>M</td><td>1 or 2 digits (1-12)</td><td>1-2 digits (1-12)</td></tr>
	
	<tr><td>Day of Month</td><td>dd</td><td>2 digits (01-31)</td><td>2 digits (01-31)</td></tr>
	<tr><td>Day of Month</td><td>d</td><td>1 or 2 digits (1-31)</td><td>1-2 digits (1-31)</td></tr>

	<tr><td>Day of Week</td><td>EE</td><td>Full name (Sunday-Saturday)</td><td>Full name</td></tr>
	<tr><td>Day of Week</td><td>E</td><td>Abbreviation (Sun-Sat)</td><td>Abbreviation</td></tr>

	<tr><td>Hour</td><td>hh</td><td>2 digits (01-12)</td><td>2 digits (01-12)</td></tr>
	<tr><td>Hour</td><td>h</td><td>1 or 2 digits (1-12)</td><td>1-2 digits (1-12)</td></tr>
	<tr><td>Hour</td><td>HH</td><td>2 digits (00-23)</td><td>2 digits (00-23)</td></tr>
	<tr><td>Hour</td><td>H</td><td>1 or 2 digits (0-23)</td><td>1-2 digits (0-23)</td></tr>
	<tr><td>Hour</td><td>KK</td><td>2 digits (00-11)</td><td>2 digits (00-11)</td></tr>
	<tr><td>Hour</td><td>K</td><td>1 or 2 digits (0-11)</td><td>1-2 digits (0-11)</td></tr>
	<tr><td>Hour</td><td>kk</td><td>2 digits (01-24)</td><td>2 digits (01-24)</td></tr>
	<tr><td>Hour</td><td>k</td><td>1 or 2 digits (1-24)</td><td>1-2 digits (1-24)</td></tr>
	
	<tr><td>Minute</td><td>mm</td><td>2 digits (00-59)</td><td>2 digits (00-59)</td></tr>
	<tr><td>Minute</td><td>m</td><td>1 or 2 digits (0-59)</td><td>1-2 digits (0-59)</td></tr>

	<tr><td>Second</td><td>ss</td><td>2 digits (00-59)</td><td>2 digits (00-59)</td></tr>
	<tr><td>Second</td><td>s</td><td>1 or 2 digits (0-59)</td><td>1-2 digits (0-59)</td></tr>

	<tr><td>AM/PM</td><td>a</td><td>AM/am/PM/pm</td><td>AM/PM</td></tr>
</tbody>
</table>

<H3> Demo </H3>
Para testar utilize os valores na tool:

>1370430003792
>
>1351936804798
>
>12/12/20013 00:00:01
>
>21/07/20004 14:30:00

<h3> link </h3>
http://joaoscotto.github.io/ConversorData/

<h3> Libs usadas: </h3>
http://www.javascripttoolbox.com/lib/date/

http://jquery.com

